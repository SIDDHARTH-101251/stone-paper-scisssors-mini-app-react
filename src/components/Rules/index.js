import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import {
  RulesButtonContainer,
  RulesButton,
  CloseButton,
  RulesImageContainer,
  RulesImage,
} from './styledComponents'

const Rules = () => (
  <RulesButtonContainer>
    <div className="popup-container">
      <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
        {close => (
          <RulesImageContainer>
            <CloseButton
              type="button"
              className="trigger-button"
              onClick={() => close()}
              aria-label="close-button"
            >
              <RiCloseLine style={{height: '20px', width: '20px'}} />
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesImageContainer>
        )}
      </Popup>
    </div>
  </RulesButtonContainer>
)
export default Rules
