import {setupBus, type Bus} from '@downforce/react/bus'
import {noop} from '@downforce/std/fn-return'
import type {Task} from '@downforce/std/fn-type'
import {useEffect} from 'react'
import {Env} from '/env/env-specs'

export * from './bus-events'

export const {
    BusContext: DemoBusContext,
    BusProvider: DemoBusProvider,
    useBusContext: useDemoBusContext,
    useBusProvider: useDemoBusProvider,
    useBus: useDemoBus,
    useBusEvent: useDemoBusEvent,
} = setupBus({contextName: 'DemoBusContext'})

export function useDemoBusDebugProvider() {
    const bus = useDemoBus()

    useBusEventLogger(bus, 'demo:bus')
}

export function useBusEventLogger(bus: Bus, namespace: string) {
    useEffect(() => {
        attachBusEventsLogger(bus, namespace)
    }, [bus, namespace])
}

export function attachBusEventsLogger(bus: Bus, namespace: string): Task {
    if (Env.Mode === 'production') {
        return noop
    }

    const stopWatching = bus.observe('.*', (event, matches, payload) => {
        console.groupCollapsed(`${namespace} event "${event}"`)
        console.debug('payload:', payload)
        console.groupEnd()
    })

    return stopWatching
}
