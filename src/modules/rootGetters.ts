import * as Vuex from 'vuex'
import { Item, Collection } from '../data/Contract'
import Repo from '../repo/Repo'
import { State } from './Module'

export type RootGetters = Vuex.GetterTree<State, any>

const rootGetters: RootGetters = {
  /**
   * Create a new repo instance.
   */
  query: (state) => (entity: string, wrap?: boolean): Repo => {
    return Repo.query(state, entity, wrap)
  },

  /**
   * Get all data of given entity.
   */
  all: (state) => (entity: string, wrap?: boolean): Collection => {
    return Repo.all(state, entity, wrap)
  },

  /**
   * Find a data of the given entity by given id.
   */
  find: (state) => (entity: string, id: string | number, wrap?: boolean): Item => {
    return Repo.find(state, entity, id, wrap)
  }
}

export default rootGetters
