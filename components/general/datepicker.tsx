import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import Head from 'next/head';

const pastMonth = new Date();

export default function DatePicker() {
	// const defaultSelected: DateRange = {
	// 	from: pastMonth,
	// 	to: addDays(pastMonth, 4),
	// };

	const [range, setRange] = useState<DateRange | undefined>();

	console.log(range);

	// let footer = <p>Please pick the first day.</p>;
	// if (range?.from) {
	// 	if (!range.to) {
	// 		footer = <p>{format(range.from, 'PPP')}</p>;
	// 	} else if (range.to) {
	// 		footer = (
	// 			<p>
	// 				{format(range.from, 'PPP')}–{format(range.to, 'PPP')}
	// 			</p>
	// 		);
	// 	}
	// }

	return (
		<>
			<Head>
				<style>{`
					.rdp-caption_label{
						font-weight:500 !important;
					}
					.rdp-day_range_start, .rdp-day_range_end {
						background: #3554D1 !important;
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
			<DayPicker className="text-text-color-1" numberOfMonths={2} mode="range" defaultMonth={pastMonth} selected={range} onSelect={setRange} disabled={{ before: new Date() }} />
		</>
	);
}
