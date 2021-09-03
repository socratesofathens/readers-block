import CONTROLLER from '../lib/controller'

import { Controller } from '../types'

import useController from '../use/controller'

import contextCreator from '.'

const creation = contextCreator<Controller>({
  initial: CONTROLLER,
  useValue: useController
})

export const {
  Provider: ControllerProvider, useCreation: useControllerContext
} = creation
