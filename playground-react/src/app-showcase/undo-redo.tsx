import '@downforce/reactx/input-v1/input-theme.css'
import '@downforce/reactx/input-v1/input.css'

import {useUndoRedo} from '@downforce/react/undoredo'
import {Button} from '@downforce/reactx/button-v1/button.js'
import {Input} from '@downforce/reactx/input-v1/input.js'
import {defineShowcase} from '@downforce/reactx/showcase-v1/showcase.js'

export default defineShowcase('Undo Redo', (props) => {
    const history = useUndoRedo({message: ''})

    return (
        <div>
            <Button
                disabled={history.undoStack.length === 0}
                onClick={history.onUndo}
            >
                Undo
            </Button>
            <Button
                disabled={history.redoStack.length === 0}
                onClick={history.onRedo}
            >
                Redo
            </Button>
            <Input
                value={history.state.message}
                onChange={(value) => history.onSave({message: value})}
            />
        </div>
    )
})
