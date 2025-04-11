import { isString } from 'lodash-es'
import { useConfirm, useNegate } from '@mpietrucha/function'

export const is = useConfirm(isString)

export const not = useNegate(is)
