import {classes} from '@downforce/react/classes'
import type {ElementProps, Props} from '@downforce/react/props'

export function NotFoundView(props: Props<NotFoundViewProps>) {
    const {className} = props

    return (
        <h1 className={classes('NotFoundView-ab42 std-root std-theme-light', className)}>
            404
        </h1>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface NotFoundViewProps extends ElementProps<'div'> {
}
