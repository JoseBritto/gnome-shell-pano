import { PreferencesGroup } from '@gi-types/adw1';
import { DBLocationRow } from '@pano/prefs/general/dbLocation';
import { HistoryLengthRow } from '@pano/prefs/general/historyLength';
import { PasteOnSelectRow } from '@pano/prefs/general/pasteOnSelect';
import { PlayAudioOnCopyRow } from '@pano/prefs/general/playAudioOnCopy';
import { ShortcutRow } from '@pano/prefs/general/shortcutRow';
import { WatchExclusionsRow } from '@pano/prefs/general/watchExclusions';
import { registerGObjectClass } from '@pano/utils/gjs';
import { _ } from '@pano/utils/shell';
import { IncognitoShortcutRow } from '@pano/prefs/general/incognitoShortcutRow';
import { ShowIndicatorRow } from '@pano/prefs/general/showIndicator';
import { OfflineModeRow } from '@pano/prefs/general/offlineMode';
import { SyncPrimaryRow } from './syncPrimary';

@registerGObjectClass
export class GeneralGroup extends PreferencesGroup {
  constructor() {
    super({
      title: _('General Options'),
    });

    this.add(new DBLocationRow());
    this.add(new HistoryLengthRow());
    this.add(new ShortcutRow());
    this.add(new IncognitoShortcutRow());
    this.add(new SyncPrimaryRow());
    this.add(new PasteOnSelectRow());
    this.add(new PlayAudioOnCopyRow());
    this.add(new ShowIndicatorRow());
    this.add(new OfflineModeRow());
    this.add(new WatchExclusionsRow());
  }
}
