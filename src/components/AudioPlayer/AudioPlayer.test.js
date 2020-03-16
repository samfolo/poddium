import AudioPlayer from './AudioPlayer';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<AudioPlayer />', () => {
  let wrapper;
  let audioPlayerComponent;

  beforeEach(() => {
    wrapper = setup(AudioPlayer);
    audioPlayerComponent = findByTestAttr(wrapper, 'component-audio-player');
  });

  it('renders without error', () => expect(audioPlayerComponent).toHaveLength(1));
  it('renders a play button', () => expectLengthOf(wrapper, 'play-button').toBe(1));
});
