import AudioPlayer from './AudioPlayer';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<AudioPlayer />', () => {
  let wrapper;
  let audioPlayerComponent;
  let defaultProps = {
    episode: {
      name: 'Test episode', 
      url: 'https://test.example/test-episode',
    }
  };

  let defaultState = {
    hasEpisodeLoaded: true,
    isPlaying: false,
  }

  beforeEach(() => {
    wrapper = setup(AudioPlayer);
    audioPlayerComponent = findByTestAttr(wrapper, 'component-audio-player');
    window.HTMLMediaElement.prototype.load = jest.fn();
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });

  it('renders without error', () => expect(audioPlayerComponent).toHaveLength(1));
  it('initially renders a play button', () => expectLengthOf(wrapper, 'play-button').toBe(1));

  describe('when a track is loaded', () => {
    it('can play a track from props', () => {
      wrapper = setup(AudioPlayer, defaultProps, defaultState);
      const playButton = findByTestAttr(wrapper, 'play-button');
      playButton.simulate('click');
      expect(wrapper.text()).toContain('Test episode');
      expectLengthOf(wrapper, 'pause-button').toBe(1);
    });
  });
});
