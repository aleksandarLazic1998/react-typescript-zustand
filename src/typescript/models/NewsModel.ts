import { StoryModel } from './StoryModel'
import { TrackingModel } from './TrackingModel'

export interface NewsModel {
    id: string
    title: null | string
    skipDedup: boolean
    type: string
    tracking: TrackingModel
    stories: StoryModel[]
}
