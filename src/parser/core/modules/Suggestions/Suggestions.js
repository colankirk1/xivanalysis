import React from 'react'

import SuggestionsComponent from 'components/modules/Suggestions'
import Module, { DISPLAY_ORDER } from 'parser/core/Module'
import Suggestion from './Suggestion'

export default class Suggestions extends Module {
	static displayOrder = DISPLAY_ORDER.SUGGESTIONS
	name = 'Suggestions'

	suggestions = []

	add(suggestion) {
		if (!(suggestion instanceof Suggestion)) {
			console.error('TODO: Proper error message for passing a non-suggestion to the suggestion add handler')
			return
		}

		this.suggestions.push(suggestion)
	}

	output() {
		// Only show the suggestions module if it's had things sent to it
		if (this.suggestions.length === 0) {
			return false
		}

		// Rendering is in a specialised component so it's got some state to work with
		return <SuggestionsComponent suggestions={this.suggestions}/>
	}
}
