import { render } from '@jsx-email/render';

import { Hr } from '../src';

describe('<Hr> component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('passes styles and other props correctly', async () => {
    const style = { borderColor: 'black', width: '50%' };
    const html = await render(<Hr style={style} data-testid="hr-test" />);
    expect(html).toContain('width:50%');
    expect(html).toContain('border-color:black');
    expect(html).toContain('data-testid="hr-test"');
  });

  it('renders correctly', async () => {
    const actualOutput = await render(<Hr />);
    expect(actualOutput).toMatchSnapshot();
  });
});
