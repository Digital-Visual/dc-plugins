/*
 * @Author: Caven
 * @Date: 2020-01-19 13:38:48
 * @Last Modified by: Caven
 * @Last Modified time: 2020-06-02 16:38:18
 */

const { State, Layer } = DC

const { Cesium } = DC.Namespace

class CzmlLayer extends Layer {
  constructor(id, url, options = {}) {
    if (!url) {
      throw new Error('CzmlLayer: the url is empty')
    }
    super(id)
    this._delegate = Cesium.CzmlDataSource.load(url, options)
    this.type = Layer.getLayerType('czml')
    this._state = State.INITIALIZED
  }

  set show(show) {
    this._show = show
    this._delegate &&
      this._delegate.then(dataSource => {
        dataSource.show = this._show
      })
  }

  get show() {
    return this._show
  }

  eachOverlay(method, context) {
    if (this._delegate) {
      this._delegate.then(dataSource => {
        let entities = dataSource.entities.values
        entities.forEach(item => {
          method.call(context, item)
        })
      })
      return this
    }
  }
}

Layer.registerType('czml')

export default CzmlLayer
