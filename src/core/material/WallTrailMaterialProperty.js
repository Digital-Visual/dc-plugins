/*
 * @Author: Caven
 * @Date: 2020-06-22 16:46:14
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-17 22:56:16
 */

const { Cesium } = DC.Namespace

const IMG = require('../images/fence.png')

const DEF_COLOR = Cesium.Color.fromBytes(0, 255, 255, 255)

class WallTrailMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._image = undefined
    this._imageSubscription = undefined
    this._color = undefined
    this._colorSubscription = undefined
    this._speed = undefined
    this._speedSubscription = undefined
    this.color = options.color || DEF_COLOR
    this.speed = options.speed || 45
    this.image = IMG
  }

  get isConstant() {
    return false
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  getType(time) {
    return Cesium.Material.WallTrailMaterialType
  }

  getValue(time, result) {
    if (!result) {
      result = {}
    }
    result.color = Cesium.Property.getValueOrClonedDefault(
      this._color,
      time,
      DEF_COLOR,
      result.color
    )
    result.speed = Cesium.Property.getValueOrClonedDefault(
      this._speed,
      time,
      45,
      result.speed
    )
    result.image = Cesium.Property.getValueOrUndefined(this._image, time)
    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof WallTrailMaterialProperty &&
        Cesium.Property.equals(this._color, other._color))
    )
  }
}

Object.defineProperties(WallTrailMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed'),
  image: Cesium.createPropertyDescriptor('image')
})

export default WallTrailMaterialProperty
