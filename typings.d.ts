// This file is generated automatically by `scripts/build_typings.js`. Please, don't change it.

type Interval = {
  start: Date | string | number,
  end: Date | string | number
}

type Options = {
  weekStartsOn?: number,
  additionalDigits?: 0 | 1 | 2,
  locale?: Locale,
  unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
  partialMethod?: 'floor' | 'ceil' | 'round'
}

type Locale = {
  distanceInWords?: {
    localize?: Function
  },
  format?: {
    formatters?: Object,
    formattingTokensRegExp?: RegExp
  },
  parse?: {
    units?: Object,
    parsers?: Object,
    parsingTokensRegExp?: RegExp
  }
}

declare module 'date-fns' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areIntervalsOverlapping (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWordsStrict {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: Options
  ): string
  namespace format {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getTime {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    argument: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: Date,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinInterval (
    date: Date | string | number,
    interval: Interval,
    options?: Options
  ): boolean
  namespace isWithinInterval {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: Options
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeek {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: Options
  ): Date
  namespace toDate {}
}

declare module 'date-fns/addDays' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOYears' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/addMilliseconds' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distanceInWords' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/endOfDay' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOYear' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/endOfMinute' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/getDate' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOYear' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/getMilliseconds' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getYear' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOYear' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/isSameMinute' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOYear' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/setMilliseconds' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setYear' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOYear' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/startOfMinute' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfYear' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOYears' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/subMilliseconds' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/addDays/index' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours/index' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOYears/index' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes/index' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths/index' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters/index' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds/index' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks/index' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears/index' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo/index' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc/index' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc/index' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours/index' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears/index' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distanceInWords/index' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/endOfDay/index' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour/index' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/endOfMinute/index' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth/index' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond/index' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek/index' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear/index' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/getDate/index' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay/index' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours/index' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay/index' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek/index' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOYear/index' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes/index' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth/index' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds/index' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime/index' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getYear/index' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter/index' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore/index' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate/index' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual/index' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday/index' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay/index' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour/index' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/isSameMinute/index' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth/index' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond/index' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek/index' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear/index' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday/index' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday/index' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday/index' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday/index' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid/index' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday/index' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend/index' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate/index' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay/index' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours/index' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay/index' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek/index' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOYear/index' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes/index' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth/index' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter/index' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds/index' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setYear/index' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay/index' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour/index' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/startOfMinute/index' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth/index' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond/index' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek/index' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfYear/index' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays/index' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours/index' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOYears/index' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes/index' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths/index' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters/index' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds/index' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks/index' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears/index' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate/index' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/addDays/index.js' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours/index.js' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOYears/index.js' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes/index.js' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths/index.js' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters/index.js' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds/index.js' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks/index.js' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears/index.js' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo/index.js' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc/index.js' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc/index.js' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOYears/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOYears/index.js' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distanceInWords/index.js' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distanceInWordsStrict/index.js' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/endOfDay/index.js' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour/index.js' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOYear/index.js' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear/index.js' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index.js' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/getDate/index.js' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay/index.js' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours/index.js' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay/index.js' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOYear/index.js' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes/index.js' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth/index.js' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index.js' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds/index.js' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime/index.js' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getYear/index.js' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter/index.js' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore/index.js' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate/index.js' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual/index.js' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index.js' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday/index.js' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay/index.js' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour/index.js' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOYear/index.js' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear/index.js' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday/index.js' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday/index.js' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday/index.js' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday/index.js' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid/index.js' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday/index.js' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend/index.js' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOYear/index.js' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index.js' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index.js' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index.js' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate/index.js' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay/index.js' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours/index.js' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay/index.js' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOYear/index.js' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes/index.js' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth/index.js' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter/index.js' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds/index.js' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setYear/index.js' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay/index.js' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour/index.js' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOYear/index.js' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfYear/index.js' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays/index.js' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours/index.js' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOYears/index.js' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes/index.js' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths/index.js' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters/index.js' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds/index.js' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks/index.js' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears/index.js' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate/index.js' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/esm' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areIntervalsOverlapping (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWordsStrict {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: Options
  ): string
  namespace format {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getTime {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    argument: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: Date,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinInterval (
    date: Date | string | number,
    interval: Interval,
    options?: Options
  ): boolean
  namespace isWithinInterval {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: Options
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeek {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: Options
  ): Date
  namespace toDate {}
}

declare module 'date-fns/esm/addDays' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOYears' {
  import {addISOYears} from 'date-fns/esm'
  export default addISOYears
}

declare module 'date-fns/esm/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns/esm'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns/esm'
  export default differenceInISOYears
}

declare module 'date-fns/esm/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/distanceInWords' {
  import {distanceInWords} from 'date-fns/esm'
  export default distanceInWords
}

declare module 'date-fns/esm/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns/esm'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/endOfDay' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOYear' {
  import {endOfISOYear} from 'date-fns/esm'
  export default endOfISOYear
}

declare module 'date-fns/esm/endOfMinute' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/getDate' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOYear' {
  import {getISOYear} from 'date-fns/esm'
  export default getISOYear
}

declare module 'date-fns/esm/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getYear' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOYear' {
  import {isSameISOYear} from 'date-fns/esm'
  export default isSameISOYear
}

declare module 'date-fns/esm/isSameMinute' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns/esm'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOYear' {
  import {setISOYear} from 'date-fns/esm'
  export default setISOYear
}

declare module 'date-fns/esm/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setYear' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOYear' {
  import {startOfISOYear} from 'date-fns/esm'
  export default startOfISOYear
}

declare module 'date-fns/esm/startOfMinute' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfYear' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOYears' {
  import {subISOYears} from 'date-fns/esm'
  export default subISOYears
}

declare module 'date-fns/esm/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addDays/index' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOYears/index' {
  import {addISOYears} from 'date-fns/esm'
  export default addISOYears
}

declare module 'date-fns/esm/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns/esm'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns/esm'
  export default differenceInISOYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/distanceInWords/index' {
  import {distanceInWords} from 'date-fns/esm'
  export default distanceInWords
}

declare module 'date-fns/esm/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns/esm'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/endOfDay/index' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour/index' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns/esm'
  export default endOfISOYear
}

declare module 'date-fns/esm/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format/index' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/getDate/index' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours/index' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOYear/index' {
  import {getISOYear} from 'date-fns/esm'
  export default getISOYear
}

declare module 'date-fns/esm/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getYear/index' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay/index' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns/esm'
  export default isSameISOYear
}

declare module 'date-fns/esm/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday/index' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday/index' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns/esm'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max/index' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate/index' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOYear/index' {
  import {setISOYear} from 'date-fns/esm'
  export default setISOYear
}

declare module 'date-fns/esm/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setYear/index' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour/index' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns/esm'
  export default startOfISOYear
}

declare module 'date-fns/esm/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfYear/index' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays/index' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOYears/index' {
  import {subISOYears} from 'date-fns/esm'
  export default subISOYears
}

declare module 'date-fns/esm/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addDays/index.js' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index.js' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOYears/index.js' {
  import {addISOYears} from 'date-fns/esm'
  export default addISOYears
}

declare module 'date-fns/esm/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index.js' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index.js' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index.js' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOYears/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/esm'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOYears/index.js' {
  import {differenceInISOYears} from 'date-fns/esm'
  export default differenceInISOYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/distanceInWords/index.js' {
  import {distanceInWords} from 'date-fns/esm'
  export default distanceInWords
}

declare module 'date-fns/esm/distanceInWordsStrict/index.js' {
  import {distanceInWordsStrict} from 'date-fns/esm'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOYear/index.js' {
  import {endOfISOYear} from 'date-fns/esm'
  export default endOfISOYear
}

declare module 'date-fns/esm/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format/index.js' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/getDate/index.js' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index.js' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours/index.js' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index.js' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOYear/index.js' {
  import {getISOYear} from 'date-fns/esm'
  export default getISOYear
}

declare module 'date-fns/esm/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index.js' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index.js' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getYear/index.js' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index.js' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index.js' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index.js' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index.js' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index.js' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index.js' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOYear/index.js' {
  import {isSameISOYear} from 'date-fns/esm'
  export default isSameISOYear
}

declare module 'date-fns/esm/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index.js' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday/index.js' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index.js' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOYear/index.js' {
  import {lastDayOfISOYear} from 'date-fns/esm'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max/index.js' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index.js' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index.js' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate/index.js' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index.js' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index.js' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index.js' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOYear/index.js' {
  import {setISOYear} from 'date-fns/esm'
  export default setISOYear
}

declare module 'date-fns/esm/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index.js' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setYear/index.js' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOYear/index.js' {
  import {startOfISOYear} from 'date-fns/esm'
  export default startOfISOYear
}

declare module 'date-fns/esm/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays/index.js' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index.js' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOYears/index.js' {
  import {subISOYears} from 'date-fns/esm'
  export default subISOYears
}

declare module 'date-fns/esm/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index.js' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index.js' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index.js' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/locale/ar' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhCn' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhTw' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ar/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhCn/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhTw/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ar/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhCn/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhTw/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/esm/locale/ar' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/bg' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ca' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/cs' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/da' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/de' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/el' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/en' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/eo' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/es' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fi' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fil' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/hr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/id' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/is' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/it' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ja' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ko' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/mk' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nb' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nl' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pl' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pt' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ru' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sk' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sv' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/th' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/tr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhCn' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhTw' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ar/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/bg/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ca/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/cs/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/da/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/de/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/el/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/en/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/eo/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/es/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fi/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fil/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/hr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/id/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/is/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/it/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ja/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ko/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/mk/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nb/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nl/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pl/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pt/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ru/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sk/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sv/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/th/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/tr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhCn/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhTw/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ar/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/bg/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ca/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/cs/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/da/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/de/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/el/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/en/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/eo/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/es/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fi/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fil/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/hr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/id/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/is/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/it/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ja/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ko/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/mk/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nb/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nl/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pl/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pt/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ru/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sk/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sv/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/th/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/tr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhCn/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhTw/index.js' {
  const locale: Locale
  export default locale
}
