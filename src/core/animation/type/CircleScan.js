/**
 * @Author: Caven
 * @Date: 2020-12-01 20:26:02
 */

import Animation from '../Animation'

const CircleScanShader = require('../../shader/CircleScanShader.glsl')

const { Transform, Parse, Util } = DC

const { Cesium } = DC.Namespace

class CircleScan extends Animation {
  constructor(viewer, position, radius, options = {}) {
    super(viewer)
    this._delegate = undefined
    this._position = Parse.parsePosition(position)
    this._radius = radius || 100
    this._color = options.color || Cesium.Color.RED
    this._speed = options.speed || 2
    this.type = 'circle_scan'
  }

  /**
   *
   * @private
   */
  _mountContent() {
    let cartesian3Center = Transform.transformWGS84ToCartesian(this._position)
    let self = this
    this._delegate = new Cesium.PostProcessStage({
      name: Util.uuid(),
      fragmentShader: CircleScanShader,
      uniforms: {
        centerWC: function() {
          return cartesian3Center
        },
        normalWC: function() {
          return Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(
            cartesian3Center,
            new Cesium.Cartesian3()
          )
        },
        radius: function() {
          return self._radius
        },
        speed: function() {
          return self._speed
        },
        color: function() {
          return self._color
        }
      }
    })
  }

  /**
   *
   * @returns {CircleScan}
   */
  start() {
    !this._delegate && this._mountContent()
    this._delegate && this._viewer.scene.postProcessStages.add(this._delegate)
    return this
  }

  /**
   *
   * @returns {CircleScan}
   */
  stop() {
    this._delegate &&
      this._viewer.scene.postProcessStages.remove(this._delegate)
    this._delegate = undefined
    return this
  }
}

export default CircleScan
