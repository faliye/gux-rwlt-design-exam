import { render,screen } from '@testing-library/react';
import GraphBox from './GraphBox';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

test('graphBox test: graphBox is rendered', async () => {
    render(<Provider store={store}>
        <GraphBox data={store.getState().graphStateSlice.data} />
    </Provider>);

    expect(screen.getByText(/兵庫県の就職者数・進学者数の推移/)).toBeVisible();
    expect(screen.getByText(/出典：RESAS（地域経済分析システム）/)).toBeVisible();
});