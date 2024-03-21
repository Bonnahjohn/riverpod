import type { Schema, Attribute } from '@strapi/strapi';

export interface ListQuestion extends Schema.Component {
  collectionName: 'components_list_questions';
  info: {
    displayName: 'question';
    description: '';
  };
  attributes: {
    ans: Attribute.Blocks;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_information_s';
  info: {
    displayName: 'SeoInformation ';
    icon: 'volumeUp';
  };
  attributes: {
    SeoTitle: Attribute.String;
    SeoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.question': ListQuestion;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
