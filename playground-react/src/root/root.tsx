import '@downforce/reactx/showcase-v1/showcase-theme-v1.css'

import {MessageProvider} from '@downforce/react/message'
import {Portal, PortalProvider} from '@downforce/react/portal'
import {PortalsProvider} from '@downforce/react/portals'
import {RouterProvider} from '@downforce/react/router'
import {StyleProvider} from '@downforce/react/style'
import {DemoBusProvider} from '/bus/bus-hooks'
import type {DemoContainer} from '/container/container-apis'
import {DemoContainerContext} from '/container/container-hooks'
import {MsgSpec} from '/message/message-specs'
import {RouterStatic} from '/router/router-static'
import {DemoStoreProvider, DemoStoreSpec} from '/store/store'
import {useColorSchemePreference} from '/theme/theme-hooks'

export function RootContext(props: RootContextProps) {
    const {children, container} = props
    const {Router} = container

    return (
        <StyleProvider>
            <DemoContainerContext value={container}>
                <DemoBusProvider>
                    <DemoStoreProvider {...DemoStoreSpec}>
                        <RouterProvider router={Router}>
                            <MessageProvider {...MsgSpec}>
                                <PortalProvider>
                                    <PortalsProvider>
                                        {children}
                                    </PortalsProvider>
                                </PortalProvider>
                            </MessageProvider>
                        </RouterProvider>
                    </DemoStoreProvider>
                </DemoBusProvider>
            </DemoContainerContext>
        </StyleProvider>
    )
}

export function Root(props: RootProps) {
    return <>
        <RouterStatic/>
        <Portal/>
        <RootIsolate/>
    </>
}

export function RootIsolate(props: RootIsolateProps): undefined {
    useColorSchemePreference()
}

// Types ///////////////////////////////////////////////////////////////////////

export interface RootContextProps {
    children: React.ReactNode
    container: DemoContainer
}

export interface RootProps {
}

export interface RootIsolateProps {
}
