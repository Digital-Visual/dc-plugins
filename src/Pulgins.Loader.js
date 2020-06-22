/*
 * @Author: Caven
 * @Date: 2020-01-14 18:24:57
 * @Last Modified by: Caven
 * @Last Modified time: 2020-06-22 21:39:26
 */

import { AroundView, AroundPoint, GlobeRotate } from './core/animation'
import {
  ClusterLayer,
  CzmlLayer,
  HeatLayer,
  KmlLayer,
  MapvLayer
} from './core/layer'
import {
  PolylineTrailMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineEmissionMaterialProperty,
  WaterMaterialProperty,
  RimLightingMaterialProperty,
  CircleFadeMaterialProperty,
  CircleWaveMaterialProperty,
  WallTrailMaterialProperty
} from './core/material'

import {
  Effect,
  BloomEffect,
  CircleScanEffect,
  FogEffect,
  RadarScanEffect,
  RainEffect,
  SnowEffect
} from './core/effects'

const plugis = {
  AroundView,
  AroundPoint,
  GlobeRotate,
  ClusterLayer,
  CzmlLayer,
  HeatLayer,
  KmlLayer,
  MapvLayer,
  Effect,
  BloomEffect,
  CircleScanEffect,
  FogEffect,
  RadarScanEffect,
  RainEffect,
  SnowEffect,
  PolylineTrailMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineEmissionMaterialProperty,
  WaterMaterialProperty,
  RimLightingMaterialProperty,
  CircleFadeMaterialProperty,
  CircleWaveMaterialProperty,
  WallTrailMaterialProperty
}

DC.mixin(plugis)
