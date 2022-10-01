import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  Long: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type Client = {
  __typename?: 'Client';
  billing_address?: Maybe<ComponentClientAddress>;
  civility?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Long']>;
  shipping_address?: Maybe<ComponentAddressShippingAddress>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientEntity = {
  __typename?: 'ClientEntity';
  attributes?: Maybe<Client>;
  id?: Maybe<Scalars['ID']>;
};

export type ClientEntityResponse = {
  __typename?: 'ClientEntityResponse';
  data?: Maybe<ClientEntity>;
};

export type ClientEntityResponseCollection = {
  __typename?: 'ClientEntityResponseCollection';
  data: Array<ClientEntity>;
  meta: ResponseCollectionMeta;
};

export type ClientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  billing_address?: InputMaybe<ComponentClientAddressFiltersInput>;
  civility?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClientFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  phone_number?: InputMaybe<LongFilterInput>;
  shipping_address?: InputMaybe<ComponentAddressShippingAddressFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClientInput = {
  billing_address?: InputMaybe<ComponentClientAddressInput>;
  civility?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['Long']>;
  shipping_address?: InputMaybe<ComponentAddressShippingAddressInput>;
};

export type Commande = {
  __typename?: 'Commande';
  client?: Maybe<ComponentClientClients>;
  client_email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  is_payed?: Maybe<Scalars['Boolean']>;
  order_id?: Maybe<Scalars['Int']>;
  product?: Maybe<Array<Maybe<ComponentProductProducts>>>;
  status?: Maybe<Array<Maybe<ComponentVendeurStatus>>>;
  total?: Maybe<Scalars['Float']>;
  total_delivery_price?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CommandeProductArgs = {
  filters?: InputMaybe<ComponentProductProductsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CommandeStatusArgs = {
  filters?: InputMaybe<ComponentVendeurStatusFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CommandeEntity = {
  __typename?: 'CommandeEntity';
  attributes?: Maybe<Commande>;
  id?: Maybe<Scalars['ID']>;
};

export type CommandeEntityResponse = {
  __typename?: 'CommandeEntityResponse';
  data?: Maybe<CommandeEntity>;
};

export type CommandeEntityResponseCollection = {
  __typename?: 'CommandeEntityResponseCollection';
  data: Array<CommandeEntity>;
  meta: ResponseCollectionMeta;
};

export type CommandeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommandeFiltersInput>>>;
  client?: InputMaybe<ComponentClientClientsFiltersInput>;
  client_email?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  is_payed?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CommandeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommandeFiltersInput>>>;
  order_id?: InputMaybe<IntFilterInput>;
  product?: InputMaybe<ComponentProductProductsFiltersInput>;
  status?: InputMaybe<ComponentVendeurStatusFiltersInput>;
  total?: InputMaybe<FloatFilterInput>;
  total_delivery_price?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommandeInput = {
  client?: InputMaybe<ComponentClientClientsInput>;
  client_email?: InputMaybe<Scalars['String']>;
  is_payed?: InputMaybe<Scalars['Boolean']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Array<InputMaybe<ComponentProductProductsInput>>>;
  status?: InputMaybe<Array<InputMaybe<ComponentVendeurStatusInput>>>;
  total?: InputMaybe<Scalars['Float']>;
  total_delivery_price?: InputMaybe<Scalars['Float']>;
};

export type CommandeVendeur = {
  __typename?: 'CommandeVendeur';
  client?: Maybe<ComponentClientClients>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_price?: Maybe<Scalars['Float']>;
  is_payed: Scalars['Boolean'];
  order_id?: Maybe<Scalars['Int']>;
  product?: Maybe<Array<Maybe<ComponentProductProducts>>>;
  seller_email?: Maybe<Scalars['String']>;
  status: Enum_Commandevendeur_Status;
  total?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CommandeVendeurProductArgs = {
  filters?: InputMaybe<ComponentProductProductsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CommandeVendeurEntity = {
  __typename?: 'CommandeVendeurEntity';
  attributes?: Maybe<CommandeVendeur>;
  id?: Maybe<Scalars['ID']>;
};

export type CommandeVendeurEntityResponse = {
  __typename?: 'CommandeVendeurEntityResponse';
  data?: Maybe<CommandeVendeurEntity>;
};

export type CommandeVendeurEntityResponseCollection = {
  __typename?: 'CommandeVendeurEntityResponseCollection';
  data: Array<CommandeVendeurEntity>;
  meta: ResponseCollectionMeta;
};

export type CommandeVendeurFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommandeVendeurFiltersInput>>>;
  client?: InputMaybe<ComponentClientClientsFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  delivery_price?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  is_payed?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CommandeVendeurFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommandeVendeurFiltersInput>>>;
  order_id?: InputMaybe<IntFilterInput>;
  product?: InputMaybe<ComponentProductProductsFiltersInput>;
  seller_email?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  total?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommandeVendeurInput = {
  client?: InputMaybe<ComponentClientClientsInput>;
  delivery_price?: InputMaybe<Scalars['Float']>;
  is_payed?: InputMaybe<Scalars['Boolean']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Array<InputMaybe<ComponentProductProductsInput>>>;
  seller_email?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Commandevendeur_Status>;
  total?: InputMaybe<Scalars['Float']>;
};

export type ComponentAddressAddress = {
  __typename?: 'ComponentAddressAddress';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  zip_code?: Maybe<Scalars['Long']>;
};

export type ComponentAddressAddressFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentAddressAddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAddressAddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAddressAddressFiltersInput>>>;
  zip_code?: InputMaybe<LongFilterInput>;
};

export type ComponentAddressAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  zip_code?: InputMaybe<Scalars['Long']>;
};

export type ComponentAddressShippingAddress = {
  __typename?: 'ComponentAddressShippingAddress';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  zip_code?: Maybe<Scalars['Long']>;
};

export type ComponentAddressShippingAddressFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentAddressShippingAddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAddressShippingAddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAddressShippingAddressFiltersInput>>>;
  zip_code?: InputMaybe<LongFilterInput>;
};

export type ComponentAddressShippingAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  zip_code?: InputMaybe<Scalars['Long']>;
};

export type ComponentClientAddress = {
  __typename?: 'ComponentClientAddress';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  zip_code?: Maybe<Scalars['Long']>;
};

export type ComponentClientAddressFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentClientAddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentClientAddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentClientAddressFiltersInput>>>;
  zip_code?: InputMaybe<LongFilterInput>;
};

export type ComponentClientAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  zip_code?: InputMaybe<Scalars['Long']>;
};

export type ComponentClientClients = {
  __typename?: 'ComponentClientClients';
  billing_address?: Maybe<ComponentAddressAddress>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Long']>;
};

export type ComponentClientClientsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentClientClientsFiltersInput>>>;
  billing_address?: InputMaybe<ComponentAddressAddressFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentClientClientsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentClientClientsFiltersInput>>>;
  phone_number?: InputMaybe<LongFilterInput>;
};

export type ComponentClientClientsInput = {
  billing_address?: InputMaybe<ComponentAddressAddressInput>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['Long']>;
};

export type ComponentProductProducts = {
  __typename?: 'ComponentProductProducts';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  reference?: Maybe<Scalars['Long']>;
  status?: Maybe<Enum_Componentproductproducts_Status>;
  title?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  vendeur?: Maybe<ComponentVendeurVendeur>;
};

export type ComponentProductProductsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductProductsFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductProductsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductProductsFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  reference?: InputMaybe<LongFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  total?: InputMaybe<FloatFilterInput>;
  vendeur?: InputMaybe<ComponentVendeurVendeurFiltersInput>;
};

export type ComponentProductProductsInput = {
  category?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Int']>;
  reference?: InputMaybe<Scalars['Long']>;
  status?: InputMaybe<Enum_Componentproductproducts_Status>;
  title?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Float']>;
  vendeur?: InputMaybe<ComponentVendeurVendeurInput>;
};

export type ComponentProductVendeur = {
  __typename?: 'ComponentProductVendeur';
  category_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_ready_to_deliver?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  product_name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  seller_email?: Maybe<Scalars['String']>;
  seller_name?: Maybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  preventIndexing?: Maybe<Scalars['Boolean']>;
  shareImage?: Maybe<ComponentSharedShareImage>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  preventIndexing?: InputMaybe<BooleanFilterInput>;
  shareImage?: InputMaybe<ComponentSharedShareImageFiltersInput>;
};

export type ComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  preventIndexing?: InputMaybe<Scalars['Boolean']>;
  shareImage?: InputMaybe<ComponentSharedShareImageInput>;
};

export type ComponentSharedShareImage = {
  __typename?: 'ComponentSharedShareImage';
  alt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSharedShareImageFiltersInput = {
  alt?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedShareImageFiltersInput>>>;
  not?: InputMaybe<ComponentSharedShareImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedShareImageFiltersInput>>>;
};

export type ComponentSharedShareImageInput = {
  alt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<Scalars['ID']>;
};

export type ComponentVendeurStatus = {
  __typename?: 'ComponentVendeurStatus';
  id: Scalars['ID'];
  seller_email?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Componentvendeurstatus_Status>;
};

export type ComponentVendeurStatusFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVendeurStatusFiltersInput>>>;
  not?: InputMaybe<ComponentVendeurStatusFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVendeurStatusFiltersInput>>>;
  seller_email?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
};

export type ComponentVendeurStatusInput = {
  id?: InputMaybe<Scalars['ID']>;
  seller_email?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Componentvendeurstatus_Status>;
};

export type ComponentVendeurVendeur = {
  __typename?: 'ComponentVendeurVendeur';
  delivery_price?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  seller_email?: Maybe<Scalars['String']>;
  seller_name?: Maybe<Scalars['String']>;
};

export type ComponentVendeurVendeurFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVendeurVendeurFiltersInput>>>;
  delivery_price?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentVendeurVendeurFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVendeurVendeurFiltersInput>>>;
  seller_email?: InputMaybe<StringFilterInput>;
  seller_name?: InputMaybe<StringFilterInput>;
};

export type ComponentVendeurVendeurInput = {
  delivery_price?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  seller_email?: InputMaybe<Scalars['String']>;
  seller_name?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Commandevendeur_Status {
  Annule = 'Annule',
  EnAttente = 'En_attente',
  EnCoursDeLivraison = 'En_cours_de_livraison',
  Rembourse = 'Rembourse',
  Termine = 'Termine',
  Valide = 'Valide'
}

export enum Enum_Componentproductproducts_Status {
  Annule = 'Annule',
  EnAttente = 'En_attente',
  EnCoursDeLivraison = 'En_cours_de_livraison',
  Rembourse = 'Rembourse',
  Termine = 'Termine',
  Valide = 'Valide'
}

export enum Enum_Componentvendeurstatus_Status {
  Annule = 'Annule',
  EnAttente = 'En_attente',
  EnCoursDeLivraison = 'En_cours_de_livraison',
  Rembourse = 'Rembourse',
  Termine = 'Termine',
  Valide = 'Valide'
}

export enum Enum_Product_Category {
  ArticlesReligieux = 'Articles_Religieux',
  CuisineEtMaison = 'Cuisine_et_Maison',
  Decoration = 'Decoration',
  Epicerie = 'Epicerie',
  JouetsEnfantsEtBebes = 'Jouets_Enfants_et_Bebes',
  Livres = 'Livres',
  OffresSpeciales = 'Offres_speciales',
  SectionFemme = 'Section_femme',
  SectionHomme = 'Section_homme'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Category | Client | Commande | CommandeVendeur | ComponentAddressAddress | ComponentAddressShippingAddress | ComponentClientAddress | ComponentClientClients | ComponentProductProducts | ComponentProductVendeur | ComponentSharedSeo | ComponentSharedShareImage | ComponentVendeurStatus | ComponentVendeurVendeur | I18NLocale | Product | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Vendeur;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createClient?: Maybe<ClientEntityResponse>;
  createCommande?: Maybe<CommandeEntityResponse>;
  createCommandeVendeur?: Maybe<CommandeVendeurEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createProductLocalization?: Maybe<ProductEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVendeur?: Maybe<VendeurEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteClient?: Maybe<ClientEntityResponse>;
  deleteCommande?: Maybe<CommandeEntityResponse>;
  deleteCommandeVendeur?: Maybe<CommandeVendeurEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVendeur?: Maybe<VendeurEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateClient?: Maybe<ClientEntityResponse>;
  updateCommande?: Maybe<CommandeEntityResponse>;
  updateCommandeVendeur?: Maybe<CommandeVendeurEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVendeur?: Maybe<VendeurEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateClientArgs = {
  data: ClientInput;
};


export type MutationCreateCommandeArgs = {
  data: CommandeInput;
};


export type MutationCreateCommandeVendeurArgs = {
  data: CommandeVendeurInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProductLocalizationArgs = {
  data?: InputMaybe<ProductInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVendeurArgs = {
  data: VendeurInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteClientArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommandeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommandeVendeurArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVendeurArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateClientArgs = {
  data: ClientInput;
  id: Scalars['ID'];
};


export type MutationUpdateCommandeArgs = {
  data: CommandeInput;
  id: Scalars['ID'];
};


export type MutationUpdateCommandeVendeurArgs = {
  data: CommandeVendeurInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVendeurArgs = {
  data: VendeurInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  Seo?: Maybe<ComponentSharedSeo>;
  category: Enum_Product_Category;
  category_products?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_time?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  image: UploadFileRelationResponseCollection;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ProductRelationResponseCollection>;
  price: Scalars['Float'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  reference: Scalars['Long'];
  seller_name: Scalars['String'];
  slug: Scalars['String'];
  stock: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendeur?: Maybe<VendeurEntityResponse>;
};


export type ProductImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductLocalizationsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  Seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  category_products?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  delivery_time?: InputMaybe<IntFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProductFiltersInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reference?: InputMaybe<LongFilterInput>;
  seller_name?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  stock?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  vendeur?: InputMaybe<VendeurFiltersInput>;
};

export type ProductInput = {
  Seo?: InputMaybe<ComponentSharedSeoInput>;
  category?: InputMaybe<Enum_Product_Category>;
  category_products?: InputMaybe<Scalars['ID']>;
  delivery_time?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Float']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  reference?: InputMaybe<Scalars['Long']>;
  seller_name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  vendeur?: InputMaybe<Scalars['ID']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  client?: Maybe<ClientEntityResponse>;
  clients?: Maybe<ClientEntityResponseCollection>;
  commande?: Maybe<CommandeEntityResponse>;
  commandeVendeur?: Maybe<CommandeVendeurEntityResponse>;
  commandeVendeurs?: Maybe<CommandeVendeurEntityResponseCollection>;
  commandes?: Maybe<CommandeEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vendeur?: Maybe<VendeurEntityResponse>;
  vendeurs?: Maybe<VendeurEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryClientArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryClientsArgs = {
  filters?: InputMaybe<ClientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCommandeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommandeVendeurArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommandeVendeursArgs = {
  filters?: InputMaybe<CommandeVendeurFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCommandesArgs = {
  filters?: InputMaybe<CommandeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVendeurArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVendeursArgs = {
  filters?: InputMaybe<VendeurFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Vendeur = {
  __typename?: 'Vendeur';
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_price?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  store_name?: Maybe<Scalars['String']>;
  suspended?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  warning?: Maybe<Scalars['Int']>;
};


export type VendeurProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VendeurEntity = {
  __typename?: 'VendeurEntity';
  attributes?: Maybe<Vendeur>;
  id?: Maybe<Scalars['ID']>;
};

export type VendeurEntityResponse = {
  __typename?: 'VendeurEntityResponse';
  data?: Maybe<VendeurEntity>;
};

export type VendeurEntityResponseCollection = {
  __typename?: 'VendeurEntityResponseCollection';
  data: Array<VendeurEntity>;
  meta: ResponseCollectionMeta;
};

export type VendeurFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VendeurFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  delivery_price?: InputMaybe<FloatFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<VendeurFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VendeurFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  store_name?: InputMaybe<StringFilterInput>;
  suspended?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  warning?: InputMaybe<IntFilterInput>;
};

export type VendeurInput = {
  delivery_price?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  store_name?: InputMaybe<Scalars['String']>;
  suspended?: InputMaybe<Scalars['Boolean']>;
  warning?: InputMaybe<Scalars['Int']>;
};

export type GetCategoriesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  suspended?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', title?: string | null, slug?: string | null, products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', category: Enum_Product_Category, description: string, price: number, stock: number, slug: string, seller_name: string, delivery_time?: number | null, title: string, reference: any, image: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string, width?: number | null, height?: number | null, formats?: any | null } | null }> }, vendeur?: { __typename?: 'VendeurEntityResponse', data?: { __typename?: 'VendeurEntity', id?: string | null, attributes?: { __typename?: 'Vendeur', name?: string | null, email?: string | null, delivery_price?: number | null, suspended?: boolean | null } | null } | null } | null } | null }> } | null } | null }> } | null };

export type GetOrdersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  client_email?: InputMaybe<Scalars['String']>;
  is_payed?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', commandes?: { __typename?: 'CommandeEntityResponseCollection', data: Array<{ __typename?: 'CommandeEntity', id?: string | null, attributes?: { __typename?: 'Commande', order_id?: number | null, total?: number | null, is_payed?: boolean | null, total_delivery_price?: number | null, createdAt?: any | null, client_email?: string | null, status?: Array<{ __typename?: 'ComponentVendeurStatus', seller_email?: string | null, status?: Enum_Componentvendeurstatus_Status | null } | null> | null, client?: { __typename?: 'ComponentClientClients', lastname?: string | null, firstname: string, email: string, billing_address?: { __typename?: 'ComponentAddressAddress', address?: string | null, zip_code?: any | null, city?: string | null, country?: string | null } | null } | null, product?: Array<{ __typename?: 'ComponentProductProducts', id: string, category?: string | null, title?: string | null, price?: number | null, quantity?: number | null, total?: number | null, reference?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, vendeur?: { __typename?: 'ComponentVendeurVendeur', delivery_price?: number | null, seller_name?: string | null, seller_email?: string | null } | null } | null> | null } | null }> } | null };

export type GetProductsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  suspended?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', title: string, reference: any, delivery_time?: number | null, stock: number, description: string, price: number, slug: string, category: Enum_Product_Category, seller_name: string, vendeur?: { __typename?: 'VendeurEntityResponse', data?: { __typename?: 'VendeurEntity', id?: string | null, attributes?: { __typename?: 'Vendeur', name?: string | null, email?: string | null, delivery_price?: number | null, suspended?: boolean | null } | null } | null } | null, image: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string, width?: number | null, height?: number | null, formats?: any | null } | null }> } } | null }> } | null };


export const GetCategoriesDocument = gql`
    query getCategories($id: ID, $title: String, $pageSize: Int, $page: Int, $limit: Int, $suspended: Boolean) {
  categories(
    pagination: {limit: $limit, pageSize: $pageSize, page: $page}
    filters: {id: {eq: $id}, title: {eq: $title}, products: {vendeur: {suspended: {eq: $suspended}}}}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        title
        slug
        products {
          data {
            id
            attributes {
              category
              description
              image {
                data {
                  id
                  attributes {
                    name
                    url
                    width
                    height
                    formats
                  }
                }
              }
              price
              stock
              slug
              seller_name
              delivery_time
              title
              reference
              vendeur {
                data {
                  id
                  attributes {
                    name
                    email
                    delivery_price
                    suspended
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      suspended: // value for 'suspended'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetOrdersDocument = gql`
    query getOrders($limit: Int, $client_email: String, $is_payed: Boolean, $sort: [String]) {
  commandes(
    pagination: {limit: $limit}
    filters: {client_email: {eq: $client_email}, is_payed: {eq: $is_payed}}
    sort: $sort
  ) {
    data {
      id
      attributes {
        order_id
        total
        is_payed
        total_delivery_price
        createdAt
        status {
          seller_email
          status
        }
        client_email
        client {
          lastname
          firstname
          email
          billing_address {
            address
            zip_code
            city
            country
          }
        }
        product {
          id
          category
          title
          price
          quantity
          image {
            data {
              attributes {
                url
              }
            }
          }
          total
          reference
          vendeur {
            delivery_price
            seller_name
            seller_email
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      client_email: // value for 'client_email'
 *      is_payed: // value for 'is_payed'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts($slug: String, $limit: Int, $pageSize: Int, $page: Int, $suspended: Boolean) {
  products(
    pagination: {limit: $limit, pageSize: $pageSize, page: $page}
    filters: {slug: {eq: $slug}, vendeur: {suspended: {eq: $suspended}}}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        title
        reference
        delivery_time
        stock
        description
        price
        slug
        category
        seller_name
        vendeur {
          data {
            id
            attributes {
              name
              email
              delivery_price
              suspended
            }
          }
        }
        image {
          data {
            id
            attributes {
              name
              url
              width
              height
              formats
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      limit: // value for 'limit'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *      suspended: // value for 'suspended'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;