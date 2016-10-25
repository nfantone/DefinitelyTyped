// Type definitions for angular-localForage 1.2.2
// Project: https://github.com/ocombe/angular-localForage
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="localForage" />
/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace localForage {

        interface LocalForageConfig {
            driver?: string;
            name?: string | number;
            version?: number;
            storeName?: string;
            description?: string;
        }

        interface ILocalForageProvider {
            config(config: LocalForageConfig): void;
            setNotify(onItemSet: boolean, onItemRemove: boolean): void;
        }

        interface ILocalForageService {
            driver(): LocalForageDriver;
            setDriver(name: string | string[]): angular.IPromise<void>;

            setItem(key: string, value: any): angular.IPromise<void>;
            setItem(keys: string[], values: any[]): angular.IPromise<void>;

            getItem(key: string): angular.IPromise<any>;
            getItem(keys: string[]): angular.IPromise<any[]>;

            removeItem(key: string | string[]): angular.IPromise<void>;

            pull(key: string): angular.IPromise<any>;
            pull(keys: string[]): angular.IPromise<any[]>;

            clear(): angular.IPromise<void>;

            key(n: number): angular.IPromise<string>;

            keys(): angular.IPromise<string>;

            length(): angular.IPromise<number>;

            iterate<T>(iteratorCallback: (value: string | number, key: string) => T): angular.IPromise<T>;

            bind($scope: angular.IScope, key: string): angular.IPromise<any>;

            bind($scope: angular.IScope, config: {
                key: string;
                defaultValue?: any;
                scopeKey?: string;
                name?: string;
            }): angular.IPromise<any>;

            unbind($scope: angular.IScope, key: string, scopeKey?: string): void;

            createInstance(config: LocalForageConfig): ILocalForageService;
            instance(name: string): ILocalForageService;
        }
    }
}
