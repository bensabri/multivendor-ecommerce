export interface Icontext {
	clients: string;
	setClients: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultState = {
	clients: '',
	// setClients: React.Dispatch<React.SetStateAction<string>>,
};
