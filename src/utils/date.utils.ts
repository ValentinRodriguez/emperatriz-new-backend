// import * as _ from 'lodash';
import * as moment from "moment";

export class DateUtils
{
	static readonly HOUR_IN_SECONDS = 3600;
	static readonly NO_DATE = '0000-00-00';
	static readonly NO_TIME = '00:00';
	static readonly LAST_HOUR_OF_DAY = ' 23:59:59';
	static readonly DAYS_OF_WEEK = new Map<number, string>( [
		[ 1, 'monday' ],
		[ 2, 'tuesday' ],
		[ 3, 'wednesday' ],
		[ 4, 'thursday' ],
		[ 5, 'friday' ],
		[ 6, 'saturday' ],
		[ 7, 'sunday' ]
	] );

	static getDayOfWeek( value: number ): string
	{
		return this.DAYS_OF_WEEK.get( Number( value ) );
	}

	static getDiffInDay( start: string, end: string )
	{
		const date1 = new Date( start );
		const date2 = new Date( end );
		const utc1 = Date.UTC( date2.getFullYear(), date2.getMonth(), date2.getDate() );
		const utc2 = Date.UTC( date1.getFullYear(), date1.getMonth(), date1.getDate() );
		return Math.floor( ( utc1 - utc2 ) / ( 1000 * 60 * 60 * 24 ) );
	}

	static dateInPast( firstDate: string, secondDate: string ): boolean
	{
		return firstDate && secondDate ? new Date( firstDate ) < new Date( secondDate ) : false;
	}
}

export function parseDate( date: string, separator: string = '-' ): Date
{
	const [ year, month, day ] = date.split( separator );
	return new Date( parseInt( year ), parseInt( month ) - 1, parseInt( day ) );
}

export function dateToString( date: Date ): string
{
	return date.getFullYear() + '-' + ( date.getMonth() + 1 ) + '-' + date.getDate();
}

export function getDateTime() : string{
	return moment().format('YYYY-MM-DD HH:mm:ss');
}

// export function getNumericMonthList()
// {
// 	return _.range( 1, 13 ).map( ( month: number ) =>
// 	{
// 		return month.toString().padStart( 2, '0' );
// 	} );
// }

export const WEEK_DAYS_STARTING_SUNDAY: string[] = [
	'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
];

export const WEEK_DAYS_STARTING_MONDAY: string[] = [
	'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
];

export const MAX_NUMBER_OF_DAYS_IN_CALENDAR = 42;

export const MONTH_NAMES: string[] = moment.months().map( month => month.toLowerCase() );
