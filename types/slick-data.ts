import { IFeatureProduct } from 'types';

export interface ISlickData {
    title: string;
    subTitle?: string;
    img: string;
    submenu?: IFeatureProduct[];
}
