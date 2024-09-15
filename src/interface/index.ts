export interface ICountry {
    altSpellings: string[];
    area: number;
    borders: string[];
    capital: string[];
    capitalInfo: {
        latlng: number[];
    };
    car: {
        signs: string[];
        side: string;
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    coatOfArms: Record<string, any>;
    continents: string[];
    currencies: {
        [currencyCode: string]: {
            name: string;
            symbol: string;
        };
    };
    demonyms: {
        eng: {
            f: string;
            m: string;
        };
    };
    flag: string;
    flags: {
        png: string;
        svg: string;
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    independent: boolean;
    landlocked: boolean;
    languages: {
        [languageCode: string]: string;
    };
    latlng: number[];
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    name: {
        common: string;
        official: string;
        nativeName: {
            [languageCode: string]: {
                official: string;
                common: string;
            };
        };
    };
    population: number;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: {
        [languageCode: string]: {
            official: string;
            common: string;
        };
    };
    unMember: boolean;
}

export interface IGetCountry {
    name: string | undefined;
}

export interface IGetCountriesParams {
    region?: string;
    search?: string;
}