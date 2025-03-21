import {createConsoleLogger, createLoggerClient, type LoggerClient, type LogType} from '@downforce/std/log'
import type {Router} from '@downforce/web/router'
import {createHashRouter} from '@downforce/web/router-hash'
import {createPathRouter} from '@downforce/web/router-path'
import {Env} from '/env/env-specs'

export const DemoContainerSpec = {
    Logger({}: DemoContainerServices) {
        return createLoggerClient(createConsoleLogger())
    },
    Router({}: DemoContainerServices) {
        return Env.RouterType === 'path'
            ? createPathRouter({basePath: Env.BasePath})
            : createHashRouter({basePath: Env.BasePath})
    },
}

// Types ///////////////////////////////////////////////////////////////////////

export interface DemoContainerServices {
    Logger: LoggerClient<LogType, void>
    Router: Router
}

export interface DemoContainerState {
}
