import {useMessageStore as useStdMessageStore} from '@downforce/react/message'
import type {DemoLocale} from '/l10n/locale-services'
import type {DemoMessageKey} from '/message/message-specs'

export {useMessage, useMessages} from '@downforce/react/message'
export const useMessageStore = useStdMessageStore<DemoLocale, DemoMessageKey>
