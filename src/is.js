import { useConfirm, useNegate } from '@mpietrucha/function'
import { isString } from 'lodash-es'

export const is = useConfirm(isString)

export const not = useNegate(is)
