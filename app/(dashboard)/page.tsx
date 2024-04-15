"use client";

import { useOrganization } from '@clerk/nextjs';
import { BoardList } from './_components/board-list';
import { EmptyOrg } from './_components/empty-org';

interface Props {
	searchParams: {
		search?: string;
		favorites?: string;
	};
}

const DashboardPage = ({searchParams}: Props) => {
	const { organization } = useOrganization()

	return (
		<div className='flex-1 h-[calc(100%-80px)] mx-5'>
			{!organization ? (
				<EmptyOrg />
			): (
				<BoardList
					orgId={organization.id}
					query={searchParams}
				/>	
			)}
		</div>
	)
}

export default DashboardPage;