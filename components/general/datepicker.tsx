import { Dispatch, SetStateAction, useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import Head from 'next/head';

interface IDatePicker {
	range: DateRange | undefined;
	setRange: Dispatch<SetStateAction<DateRange | undefined>>;
}

export default function DatePicker({ range, setRange }: IDatePicker) {
	return (
		<>
			<Head>
				<style>{`
					.rdp-caption_label{
						font-weight:500 !important;
					}
					.rdp-day_range_start, .rdp-day_range_end {
						background: #13357B !important;
						border-radius:100px !important;
					}
					.rdp-cell{position:relative;}
					.rdp-cell:has(> .rdp-day_range_start)::after {
						content: '';
						width: inherit;
						height: 34px;
						position: absolute;
						background: #f5f5f5;
						top: 50%;
						left: 0;
						z-index: -1;
						transform: translateY(-50%);
						border-top-left-radius:100px;
						border-bottom-left-radius:100px;
					}
					.rdp-cell:has(> .rdp-day_range_end)::after {
						content: '';
						width: inherit;
						height: 34px;
						position: absolute;
						background: #f5f5f5;
						top: 50%;
						left: 0;
						z-index: -1;
						transform: translateY(-50%);
						border-top-right-radius:100px;
						border-bottom-right-radius:100px;
					}
					.rdp-day_range_middle{
						background: #f5f5f5 !important;
						height:34px !important;
						color: #051036 !important;
					}
				`}</style>
			</Head>
			<DayPicker className="text-sm text-text-color-1" numberOfMonths={2} mode="range" defaultMonth={new Date()} selected={range} onSelect={setRange} disabled={{ before: new Date() }} />
		</>
	);
}
