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

  let initialState = {
    hasEpisodeLoaded: true,
    isPlaying: false,
  }

  beforeEach(() => {
    wrapper = setup(AudioPlayer, defaultProps, initialState);
    audioPlayerComponent = findByTestAttr(wrapper, 'component-audio-player');
    // stubbed as jsdom does not support them:
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });

  it('renders without error', () => expect(audioPlayerComponent).toHaveLength(1));
  it('initially renders a play button', () => expectLengthOf(wrapper, 'play-button').toBe(1));

  describe('when a track is loaded', () => {
    it('can play a track from props', () => {
      const playButton = findByTestAttr(wrapper, 'play-button');
      playButton.simulate('click');
      expect(wrapper.text()).toContain('Test episode');
      expectLengthOf(wrapper, 'pause-button').toBe(1);
    });

    it('can pause a playing track', () => {
      const tempState = {
        hasEpisodeLoaded: true,
        isPlaying: true,
      }

      wrapper = setup(AudioPlayer, defaultProps, tempState);
      const pauseButton = findByTestAttr(wrapper, 'pause-button');
      pauseButton.simulate('click');
      expect(wrapper.text()).toContain('Test episode');
      expectLengthOf(wrapper, 'play-button').toBe(1);
    });
  });
});
