import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'N8DWhiteSpaceApplicationCustomizerStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

const LOG_SOURCE: string = 'N8DWhiteSpaceApplicationCustomizer';

import styles from './N8DWhiteSpaceApplicationCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IN8DWhiteSpaceApplicationCustomizerProperties {
  Bottom: string;
}



/** A Custom Action which can be run during execution of a Client Side Application */
export default class N8DWhiteSpaceApplicationCustomizer
  extends BaseApplicationCustomizer<IN8DWhiteSpaceApplicationCustomizerProperties> {

  private _bottomPlaceholder: PlaceholderContent | undefined;

  public constructor(){
    super();

  }

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);



    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);

    return Promise.resolve();

  }

  private _renderPlaceHolders(): void {

    SPComponentLoader.loadCss('https://n8design.github.io/whitespace/blacklist.css');
    // SPComponentLoader.loadCss('https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');

    // Handling the bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error("The expected placeholder (Bottom) was not found.");
        return;
      }

      if (this.properties) {
        let bottomString: string = this.properties.Bottom;
        if (!bottomString) {
          bottomString = "(Bottom property was not defined.)";
        }

        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = `
                <div class="${styles.app}">
                </div>`;
        }
      }
    }
  }

  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }
}
