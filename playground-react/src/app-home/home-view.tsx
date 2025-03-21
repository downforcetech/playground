import './home-view.css'

import {classes} from '@downforce/react/classes'
import {Message} from '@downforce/react/message'
import type {ElementProps, Props} from '@downforce/react/props'
import {Header} from '/ui-widgets/header'

export function HomeView(props: Props<HomeViewProps>) {
    const {className, ...otherProps} = props

    return (
        <div
            {...otherProps}
            className={classes('HomeView-0d51', className)}
        >
            <Header/>

            <Message tag="h1" className="page-title">
                Home
            </Message>
        </div>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface HomeViewProps extends ElementProps<'div'> {
}
