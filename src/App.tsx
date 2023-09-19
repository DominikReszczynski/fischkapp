import { AppHeader } from './components/AppHeader';
import { AppLayout } from './components/AppLayout';
import { AppCardEdit } from './components/AppCardEdit';
import { AppCard } from './components/AppCard';

import './App.css';

function App() {
	return (
		<AppLayout>
			<AppHeader />
			<div className='content'>
				{/* <AppCardEdit /> */}
				<AppCard />
			</div>
		</AppLayout>
	);
}

export default App;
