import { VendeursQuery } from '../../../generated';
import { FC } from 'react';

interface Iprops {
	vendeur: VendeursQuery | undefined;
}

const AccountSeller: FC<Iprops> = ({ vendeur }) => {
	return <div>AccountSeller</div>;
};

export default AccountSeller;
