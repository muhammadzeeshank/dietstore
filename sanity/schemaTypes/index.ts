import { type SchemaTypeDefinition } from 'sanity'

import {categoryType} from './categoryType'
import { productType } from './ProductType'
import { orderType } from './orderType'
import heroSectionType from './heroSectionType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, productType, orderType, heroSectionType],
}
