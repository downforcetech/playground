import {OneDayInMs} from '@downforce/std/date'
import type {CookieOptions} from '@downforce/web/cookie'
import {maxAgeFromDate} from '@downforce/web/cookie'

export const CookieSpec: CookieOptions = {
    key: 'toke',
    path: '/',
    maxAge: maxAgeFromDate(30 * OneDayInMs),
}
