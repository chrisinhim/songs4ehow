# Software Requirements Specification: Songs4Ehow

## 1. Introduction
### 1.1 Purpose
This document specifies the comprehensive software requirements, including User Interface (UI) and User Experience (UX) aspects, for the Songs4Ehow application. It describes the functional, non-functional, visual, and interactive requirements of the application, covering both mobile and desktop platforms.

### 1.2 Scope
The Songs4Ehow application will allow users to view song lyrics, manage song lists, and display lyrics in a presentation mode. It will provide distinct user experiences tailored for mobile and desktop environments, including specific layouts, visual elements, and interaction patterns.
The scope includes comprehensive song metadata management (chords, musical details), setlist/service planning, advanced presentation options, granular user roles, musician-focused tools, data import/export, and management of liturgical texts.

### 1.3 Definitions, Acronyms, and Abbreviations
*   **SRS:** Software Requirements Specification
*   **UI:** User Interface
*   **UX:** User Experience
*   **UID:** User Identifier
*   **CCLI:** Christian Copyright Licensing International
*   **BPM:** Beats Per Minute
*   **ChordPro:** A text-based format for specifying chords along with lyrics.

## 2. Overall Description

### 2.1 User Characteristics
Users are individuals seeking to access and display song lyrics, potentially in a group or worship setting.

### 2.2 Product Perspective
The application is a standalone utility for managing and displaying song lyrics.

### 2.3 Constraints
*   **C-001: Admin Access:** Administrative privileges (e.g., adding/editing songs) shall be restricted to users whose Firebase UIDs are present in a predefined list within the application configuration.
*   **C-002: Firebase Backend:** The application relies on Google Firebase for authentication and Firestore for data storage.
*   **C-003: Google Fonts:** Specific Google Fonts are used for display and presentation; their availability via CDN is assumed.
*   **C-004: User Roles:** Access to specific features will be governed by user roles (e.g., Administrator, Worship Leader, Musician, Media Operator, Song Librarian). Default role for new authenticated users will be 'Musician' or a basic viewer.

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 Initial Application Launch

**FR-GEN-001 (Desktop):** On desktop devices, upon launch, the application shall display:
*   **FR-GEN-001.1:** The "Songs List" view in a left pane.
*   **FR-GEN-001.2:** An initial message (e.g., "Select a song from the list...") in the main pane.

**FR-GEN-002 (Mobile):** On mobile devices, upon launch, the application shall display the "Songs List" view.
*(Note: Any previously mentioned animated logo on interaction is not currently implemented and is deferred/removed from active requirements.)*

#### 3.1.2 Mobile Application Flow

**FR-MOB-001:** If the application is running on a mobile device, the "Songs List" view shall:
*   **FR-MOB-001.1:** Display the heading "Melodies of worship".
*   **FR-MOB-001.2:** Include a search bar for filtering songs.
*   **FR-MOB-001.3:** Provide access to Theme settings (e.g., a button, potentially at the bottom or in a menu).
*   **FR-MOB-001.4:** Make scroll-to-top and scroll-to-bottom buttons available when the song list is scrollable.
*   **FR-MOB-001.5:** Display user login information and a login/logout button (e.g., top right corner).
*   **FR-MOB-001.6:** Optionally include filters for tags/themes.

**FR-MOB-002:** When a user clicks on a song in the "Songs List" view on a mobile device, the song view shall:
*   **FR-MOB-002.1:** Display the song lyrics and chords (chords inline or above lyrics, clearly distinguishable).
*   **FR-MOB-002.2:** Provide a "back to list" button.
*   **FR-MOB-002.3:** Provide "A-" and "A+" buttons for font size adjustment (e.g., top right corner).
*   **FR-MOB-002.4:** The presentation mode option shall be unavailable.
*   **FR-MOB-002.5:** Clickable paragraphs functionality shall be disabled.
*   **FR-MOB-002.6:** Disable song editing options (unless the user has specific roles and the UI is adapted for it).
*   **FR-MOB-002.7 (Musician Tools):** Provide controls for chord transposition (e.g., dropdown or +/- buttons for semitones), auto-scroll (with play/pause and speed controls), and adding personal annotations.

#### 3.1.3 Desktop Application Flow

**FR-DES-001:** On a desktop device, the application shall feature a layout with a left pane (sidebar) and a main pane. The left pane ("Songs List" view) shall:
*   **FR-DES-001.1:** Display the heading "Melodies of worship".
*   **FR-DES-001.2:** Include a search bar.
*   **FR-DES-001.3:** Provide access to Theme settings.
*   **FR-DES-001.4:** Include an "Add New Song" button (visibility based on user role).
*   **FR-DES-001.5:** Optionally feature sections or tabs for "Songs", "Setlists", "Liturgical Texts", and "Admin/Settings" (visibility based on user role).
*   **FR-DES-001.6:** Be resizable by dragging its edge.
*   **FR-DES-001.7:** Make scroll-to-top and scroll-to-bottom buttons available when the song list is scrollable.
The main pane, when no song is selected, shall:
*   **FR-DES-001.8:** Have "A-" and "A+" buttons for font size adjustment available on its top left corner.
*   **FR-DES-001.9:** Have a "PRESENT" switch button (for presentation mode) available on its top right corner.

**FR-DES-002:** When a song is selected from the list on a desktop device, the main pane shall:
*   **FR-DES-002.1:** Display its title, content (lyrics and chords formatted), and relevant metadata (key, BPM, author, CCLI, tags, scripture references).
*   **FR-DES-002.2:** A "back" button to navigate away from the song lyrics view (within the main pane) shall not be available (navigation is managed via the list).
*   **FR-DES-002.3:** Retain "A-" and "A+" buttons for font size adjustment (affecting main pane font size when presentation mode is OFF).
*   **FR-DES-002.4:** Provide an "Edit Song" button (visibility based on user role).
*   **FR-DES-002.5:** Retain the "PRESENT" switch button.
*   **FR-DES-002.6:** Style paragraphs of the song lyrics to indicate clickability if presentation mode is ON.

**FR-DES-003:** Presentation Mode (Desktop) - When the "PRESENT" switch is activated (ON) on a desktop device:
*   **FR-DES-003.1:** The "A-" and "A+" buttons shall adjust the font size in the presentation window.
*   **FR-DES-003.2:** A font selection dropdown shall be available, offering predefined fonts (e.g., Default, Roboto, Noto Sans Telugu, Oswald, Lobster).
*   **FR-DES-003.3:** Paragraphs within the song lyrics (displayed in the main pane) shall become clickable.
*   **FR-DES-003.4:** Clicking a paragraph shall open/update a new, separate window.
*   **FR-DES-003.5:** The presentation window shall display only the clicked paragraph, centered, with a black background and white text (default, customizable via FR-DES-003.6), using the selected font and font size.
*   **FR-DES-003.6 (Presentation Controls):** Additional controls available in the main pane for presentation mode shall include:
    *   **FR-DES-003.6.1:** Background selection (solid color, image, video loop).
    *   **FR-DES-003.6.2:** Advanced theme/layout options for the presentation window.
    *   **FR-DES-003.6.3:** Transition effect selection between slides/paragraphs.
    *   **FR-DES-003.6.4:** A button to "Blank to Background" / "Clear Layer".
    *   **FR-DES-003.6.5:** Controls for managing Stage Display output (if active).
    *   **FR-DES-003.6.6:** An interface to send an alert/message overlay (for authorized roles).
*   **FR-DES-003.7 (Stage Display Window - Optional):** A separate, configurable window for stage display, showing current/next lines, chords, clock, etc., may be available.

**FR-DES-004:** Presentation Mode (Desktop) - When the "PRESENT" switch is deactivated (OFF):
*   **FR-DES-004.1:** Clickable paragraphs functionality shall be disabled in the main pane.
*   **FR-DES-004.2:** The "A-" and "A+" buttons shall adjust the font size in the main pane.
*   **FR-DES-004.3:** The separate presentation window (FR-DES-003.4) should close or become inactive.

#### 3.1.4 Settings
**FR-SET-001: Theme Configuration**
*   **FR-SET-001.1:** The application shall provide a theme toggle button to cycle through available themes.
*   **FR-SET-001.2:** Clicking the theme toggle button shall cycle through available themes: System Default, Light, Dark, Ocean Calm.
*   **FR-SET-001.3:** The selected theme shall be applied immediately.
*   **FR-SET-001.4:** The selected theme preference shall be persisted in the user's browser (e.g., using localStorage).
*   **FR-SET-001.5:** On application load, the persisted theme shall be applied. If no theme is persisted, "System Default" shall be used.

**(FR-SET-001.2 and FR-SET-002.2 regarding feedback options are deferred/removed as not currently implemented in index.html.)**

#### 3.1.5 Search Functionality
**FR-SRCH-001:** The song search input shall filter the displayed song list.
*   **FR-SRCH-001.1:** Filtering shall occur as the user types.
*   **FR-SRCH-001.2:** Search shall be case-insensitive and match against song titles and song content.
*   **FR-SRCH-001.3:** A "clear search" button shall appear when text is entered into the search bar.
*   **FR-SRCH-001.4:** Clicking the "clear search" button shall clear the search input and display the full song list.

#### 3.1.6 Authentication
**FR-AUTH-001:** The application shall allow users to authenticate using Google Sign-In.
*   **FR-AUTH-001.1:** A "Login with Google" button shall be visible to unauthenticated users.

**FR-AUTH-002:** Upon successful authentication:
*   **FR-AUTH-002.1:** The "Login with Google" button shall be hidden.
*   **FR-AUTH-002.2:** A "Logout" button shall become visible.

**FR-AUTH-002.3:** User information (e.g., display name or email) shall be displayed.
*   **FR-AUTH-002.4:** If the user is an admin (see C-001), an "(Admin)" indicator shall be displayed next to their information.

**FR-AUTH-003:** The application shall allow authenticated users to log out.
*   **FR-AUTH-003.1:** Clicking the "Logout" button shall sign the user out.
*   **FR-AUTH-003.2:** Upon logout, the UI shall revert to the unauthenticated state (FR-AUTH-001.1, hide FR-AUTH-002.2, FR-AUTH-002.3, FR-AUTH-002.4).

**FR-AUTH-004:** The application shall identify admin users based on a predefined list of Firebase UIDs (see C-001).

#### 3.1.7 Song Management (Primarily Admin/Song Librarian roles)
*(These functionalities are only available to authenticated admin users, see FR-AUTH-004)*

**FR-ADMIN-001: Add New Song**
*   **FR-ADMIN-001.1:** An "Add New Song" button shall be visible to admin users.
*   **FR-ADMIN-001.2:** Clicking "Add New Song" shall display a song editor form.
*   **FR-ADMIN-001.3:** The song editor form shall include fields for: Song Title (required), Song Number (for ordering, optional), Song Content (lyrics, required), Chords (e.g., using a ChordPro editor or textarea), Default Key, Capo, BPM, Author(s)/Composer(s), Copyright Info & CCLI Number, Themes/Tags (e.g., a multi-select or tag input field), Scripture References, Alternative Titles.
*   **FR-ADMIN-001.4:** The form shall have "Save Song" (or "Create Song") and "Cancel" buttons.
*   **FR-ADMIN-001.5:** Clicking "Save Song" (or "Create Song") shall:
    *   Validate that Title and Content are not empty, and Number is a valid number.
    *   Create a new song document in Firestore with the provided data, `createdAt` timestamp, and `createdBy` user info (UID and name). (See DR-001.1)
    *   Hide the editor form.
    *   Refresh the song list.
    *   Display a success message.
*   **FR-ADMIN-001.6:** Clicking "Cancel" shall hide the editor form without saving.

**FR-ADMIN-002: Edit Song**
*   **FR-ADMIN-002.1:** An "Edit Song" button shall be visible to admin users when a song is selected and displayed in the main pane.
*   **FR-ADMIN-002.2:** Clicking "Edit Song" shall display the song editor form, pre-filled with the selected song's data (title, number, content).
*   **FR-ADMIN-002.3:** The form shall have "Update Song" and "Cancel" buttons.
*   **FR-ADMIN-002.4:** Clicking "Update Song" shall:
    *   Validate required fields (e.g., Title, Content).
    *   Update the existing song document in Firestore with the new data, `updatedAt` timestamp, and `updatedBy` user info (UID and name). (See DR-001.1)
    *   Hide the editor form.
    *   Refresh the song list.
    *   If the edited song was currently displayed, refresh its content in the main pane.
    *   Display a success message.
*   **FR-ADMIN-002.5:** Clicking "Cancel" shall hide the editor form without saving.

**FR-SONG-001: Enhanced Song Details Management** (Accessible based on user role, e.g., Admin, Song Librarian)
*   **FR-SONG-001.1:** The system shall allow storing and editing of chord information (e.g., in ChordPro format) alongside lyrics. (See DR-001.1)
*   **FR-SONG-001.2:** The system shall allow storing and editing of the song's default musical key. (See DR-001.1)
*   **FR-SONG-001.3:** The system shall allow storing and editing of capo settings for the default key. (See DR-001.1)
*   **FR-SONG-001.4:** The system shall allow storing and editing of the song's tempo (BPM). (See DR-001.1)
*   **FR-SONG-001.5:** The system shall allow storing and editing of author(s)/composer(s) information. (See DR-001.1)
*   **FR-SONG-001.6:** The system shall allow storing and editing of copyright and CCLI number information. (See DR-001.1)
*   **FR-SONG-001.7:** The system shall allow assigning and managing multiple themes/tags/categories to songs. (See DR-001.1)
*   **FR-SONG-001.8:** The system shall allow storing and editing of scripture references related to the song. (See DR-001.1)
*   **FR-SONG-001.9:** The system shall allow storing and editing of alternative titles or translations for songs. (See DR-001.1)
*   **FR-SONG-001.10:** The system shall allow defining structural elements within song content (e.g., Verse, Chorus, Bridge) for display and navigation.

**FR-SONG-002: Song Display with Enhanced Details**
*   **FR-SONG-002.1:** When viewing a song, relevant stored metadata (key, BPM, chords, author, CCLI, tags, scripture references, etc.) shall be displayable.
*   **FR-SONG-002.2:** Chords shall be displayed appropriately formatted with lyrics (e.g., inline or above lyrics, clearly distinguishable).

#### 3.1.8 Setlist (Order of Service) Management (Accessible based on user role, e.g., Worship Leader, Admin)

**FR-SETLIST-001: Setlist Creation and Management**
*   **FR-SETLIST-001.1:** Users with appropriate permissions shall be able to create new setlists, providing a name and date/event association, within a dedicated view/section for managing setlists (list, create, edit, archive). (See DR-002)
*   **FR-SETLIST-001.2:** The setlist editor shall allow adding songs from the song library (e.g., from a searchable song list panel).
*   **FR-SETLIST-001.3:** The setlist editor shall allow drag-and-drop reordering of items.
*   **FR-SETLIST-001.4:** The setlist editor shall allow adding non-song items, such as notes, scripture readings, or references to liturgical texts. (See DR-002, DR-003)
*   **FR-SETLIST-001.5:** The setlist editor shall allow editing annotations, key overrides, and capo overrides specific to a song's performance within that setlist. (See DR-002)
*   **FR-SETLIST-001.6:** The setlist editor shall provide options to "Save as Template".
*   **FR-SETLIST-001.7:** Users shall be able to load setlists from saved templates.
*   **FR-SETLIST-001.8:** Users shall be able to archive setlists.
*   **FR-SETLIST-001.9:** Users shall be able to view and manage (e.g., unarchive, delete) archived setlists.
*   **FR-SETLIST-001.10 (Future):** The system may support sharing setlists with other users and collaborative editing based on permissions.

**FR-SETLIST-002: Setlist Display and Interaction**
*   **FR-SETLIST-002.1:** The application shall provide a view to clearly display the contents of a selected setlist, including any specific annotations or overrides.
*   **FR-SETLIST-002.2:** Users shall be able to navigate through items in a setlist for presentation or review.

#### 3.1.9 Advanced Presentation Capabilities (Desktop - Media Operator, Admin roles)

**FR-PRES-ADV-001: Enhanced Presentation Output** (Extends FR-DES-003)
*   **FR-PRES-ADV-001.1:** The presentation mode shall allow the use of custom image or video loop backgrounds for lyrics.
*   **FR-PRES-ADV-001.2:** The presentation mode shall offer advanced theming options (e.g., more font styles, colors, shadows, layout presets like two-column or lower-third).
*   **FR-PRES-ADV-001.3:** The system shall provide options for smooth transitions (e.g., fade, cut) between presented song paragraphs or slides.
*   **FR-PRES-ADV-001.4:** The system shall allow authorized users to display urgent messages or alerts as an overlay on the presentation screen.
*   **FR-PRES-ADV-001.5:** The presentation controls shall include a "Blank to Background" or "Clear Layer" function to quickly hide lyrics and show only the background.

**FR-PRES-ADV-002: Stage Display / Confidence Monitor**
*   **FR-PRES-ADV-002.1:** The system shall be capable of generating a separate, configurable stage display output.
*   **FR-PRES-ADV-002.2:** The stage display shall be configurable to show content such as current/next lines of lyrics, chords, setlist progress, a clock, or custom messages.

#### 3.1.10 User Roles and Collaboration (System-wide)

**FR-ROLE-001: Granular User Permissions** (Ref C-004)
*   **FR-ROLE-001.1:** The system shall define distinct user roles (e.g., Administrator, Song Librarian, Worship Leader, Musician, Media Operator).
*   **FR-ROLE-001.2:** Each role shall have specific permissions determining access to features (e.g., song editing, setlist creation, presentation control).
*   **FR-ROLE-001.3:** User role assignment shall be managed by Administrators via an admin panel section for viewing users and assigning/modifying their roles.

**FR-COLLAB-001: Song Version History**
*   **FR-COLLAB-001.1:** The system shall track version history for changes made to songs. (See DR-001.1 `version_history_ref`)
*   **FR-COLLAB-001.2:** Users with appropriate permissions shall be able to view the history of changes for a song, compare versions, and potentially revert to a previous version, accessible from the song editor or a dedicated view.

**FR-COLLAB-002: Approval Workflows (Future)**
*   **FR-COLLAB-002.1 (Future):** The system may implement an approval workflow for new songs or significant song edits before they are published to the main library.

#### 3.1.11 Musician-Focused Tools (Primarily Mobile/Tablet)

**FR-MUSIC-001: Enhanced Song View for Musicians**
*   **FR-MUSIC-001.1:** Chord charts shall be displayed clearly and optimized for readability on mobile/tablet devices.
*   **FR-MUSIC-001.2:** The system shall provide an option for transposing song chords on the fly for display purposes (client-side).
*   **FR-MUSIC-001.3:** The system shall provide an auto-scroll feature for lyrics/chords, with configurable speed or manual trigger.
*   **FR-MUSIC-001.4:** Musicians shall be able to add personal (private) annotations to songs or setlist items. (See DR-004)
*   **FR-MUSIC-001.5 (Future):** The system may include a basic metronome tool.

**FR-MUSIC-002: Offline Access**
*   **FR-MUSIC-002.1:** Users shall be able to download selected songs and setlists for offline access on their mobile/tablet devices, with UI elements (buttons or indicators) for this action.
*   **FR-MUSIC-002.2:** The application shall function in a read-only mode for offline content when no internet connection is available, with clear indication of offline mode and available content.

#### 3.1.12 Data Portability & Management (Admin, Song Librarian roles)

**FR-DATA-001: Song Import**
*   **FR-DATA-001.1:** The system shall provide an interface for importing songs from common formats such as ChordPro, plain text (allowing file selection and mapping options if necessary), and potentially CCLI SongSelect data.

**FR-DATA-002: Song and Setlist Export**
*   **FR-DATA-002.1:** The system shall provide options to export selected songs or entire setlists in various formats (PDF, text, ChordPro).

**FR-DATA-003: Data Management Tools**
*   **FR-DATA-003.1:** The system shall provide a UI to select multiple songs and apply changes to common metadata fields (bulk edit).
*   **FR-DATA-003.2:** The system shall include a tool or view to highlight potential duplicate songs with options to merge or delete.
*   **FR-DATA-003.3 (Operational):** Administrators should have a strategy for backing up and restoring the Firestore database (may not be an in-app user feature).

#### 3.1.13 Liturgy & Other Texts Management (Admin, Song Librarian, Worship Leader roles)

**FR-LITURGY-001: Management of Liturgical Texts**
*   **FR-LITURGY-001.1:** The system shall allow users to create, edit, and manage other textual items such as responsive readings, prayers, creeds, and announcements, within a dedicated view/section. A form for these texts shall include fields for Title, Type (prayer, reading, etc.), Content, and Category. (See DR-003)
*   **FR-LITURGY-001.2:** These liturgical texts shall be organizable and searchable similar to songs.

**FR-LITURGY-002: Presentation of Liturgical Texts**
*   **FR-LITURGY-002.1:** Liturgical texts shall be presentable using the same or similar presentation tools as songs, including inclusion in setlists.

### 3.2 Application States (Summary)
This section summarizes the key UI aspects of application states.

#### 3.2.1 Mobile States
*   **mobile_list_view:** Songs list is displayed with "Melodies of worship" heading, search, theme toggle, and auth controls. (Corresponds to FR-GEN-002, FR-MOB-001)
*   **mobile_song:** Song lyrics are displayed with a "back to list" button (top-left) and A-/A+ buttons (top-right). (Corresponds to FR-MOB-002). Enhanced with chord display, transposition, auto-scroll options (FR-MUSIC-001).
*   **mobile_song_editor:** (Admin only) Form for adding/editing song details. (Corresponds to FR-ADMIN-001, FR-ADMIN-002).
*   **mobile_setlist_view:** Displays a list of available setlists.
*   **mobile_setlist_detail_view:** Displays items within a selected setlist, with options for personal annotations.
*   **mobile_offline_view:** Shows downloaded content available for offline use.

#### 3.2.2 Desktop States
*   **desktop_initial_view:**
    *   Left Pane (`desktop_list_view`): Songs list with "Melodies of worship" heading, search, theme toggle, auth controls, "Add New Song" button (admin).
    *   Main Pane (`desktop_initial_main_pane`): Initial message. A-/A+ buttons and PRESENT switch are available.
*   **desktop_song_list_view (UI - Left Pane):** Enhanced with filtering by tags, navigation to other item types (setlists, liturgy).
*   **desktop_song:**
    *   Left Pane: Songs list (as in `desktop_first`).
    *   Main Pane: Song lyrics, chords, and full metadata displayed. A-/A+ buttons, PRESENT switch, and Edit Song button (role-dependent) are available.
*   **desktop_presentation:**
    *   Left Pane: Songs list (as in `desktop_first`).
    *   Main Pane: Song lyrics/liturgy displayed with clickable paragraphs/sections. Enhanced presentation controls (backgrounds, themes, transitions, alerts, stage display controls).
    *   Secondary Window (Main Projector): Displays the clicked paragraph/slide with selected theme, background, font.
    *   Tertiary Window (Stage Display - Optional): Displays configurable content for stage. (FR-PRES-ADV-002)
*   **desktop_song_editor:** (Admin only)
    *   Left Pane: Songs list.
    *   Main Pane: Comprehensive form for adding/editing song details including all new metadata fields (chords, key, BPM, CCLI, tags, etc.) and version history access.
*   **desktop_setlist_manager:**
    *   Left Pane: Navigation (Songs, Setlists, etc.).
    *   Main Pane: View for listing, creating, and editing setlists. Setlist editor includes item reordering, adding various item types, annotations, key/capo overrides, template functions.
*   **desktop_liturgy_manager:**
    *   Left Pane: Navigation.
    *   Main Pane: View for listing, creating, and editing liturgical texts.
*   **desktop_admin_panel:**
    *   Left Pane: Navigation.
    *   Main Pane: Sections for user role management, data import/export tools, duplicate management, system settings.

### 3.3 Data Requirements

**DR-001: Core Data Structures**
The application shall use Firestore collections for storing application data.

**DR-001.1: `songs` Collection (Firestore)**
*   **Purpose:** To store song details including lyrics, title, and ordering information.
*   **Attributes:**
    *   `title` (string): The display title of the song.
    *   `number` (number): A numeric value used for ordering the songs in the list.
    *   `content` (string): The full lyrics of the song, with paragraphs typically separated by double newlines.
    *   `createdAt` (timestamp): Firestore server timestamp indicating when the song was created.
    *   `createdBy` (object): Information about the user who created the song.
    *   `uid` (string): Firebase UID of the creator.
    *   `name` (string): Display name or email of the creator.
    *   `updatedAt` (timestamp): Firestore server timestamp indicating when the song was last updated. (Optional, added on update)
    *   `updatedBy` (object): Information about the user who last updated the song. (Optional, added on update)
        *   `uid` (string): Firebase UID of the updater.
        *   `name` (string): Display name or email of the updater.
*   **Newly Added/Specified Attributes:**
    *   `chords` (string, nullable): Chord information, potentially in ChordPro format.
    *   `defaultKey` (string, nullable): Default musical key of the song (e.g., "G", "Cm").
    *   `capo` (number, nullable): Capo position for the default key.
    *   `bpm` (number, nullable): Beats Per Minute.
    *   `author` (string, nullable): Author(s)/Composer(s) of the song.
    *   `copyrightInfo` (string, nullable): Copyright details.
    *   `ccliNumber` (string, nullable): CCLI SongSelect ID.
    *   `themesTags` (array of strings, nullable): Tags or categories for the song.
    *   `scriptureReferences` (array of strings, nullable): Related scripture passages.
    *   `alternativeTitles` (array of strings, nullable): Alternative or translated titles.
    *   `sections` (array of objects, nullable): Defined structural elements like `{ type: 'verse' | 'chorus', content: '...' }` or markers within `content`.
    *   `versionHistoryRef` (reference, nullable): Pointer to a subcollection or separate collection for version history.

**DR-002: `setlists` Collection (Firestore)**
*   **Purpose:** To store setlists or orders of service.
*   **Attributes:**
    *   `name` (string): Name of the setlist (e.g., "Sunday Morning Service").
    *   `eventDate` (timestamp, nullable): Date of the event this setlist is for.
    *   `items` (array of objects): Ordered list of items in the setlist. Each item:
        *   `itemId` (string): Unique ID for this item within the setlist.
        *   `type` (string): 'song', 'liturgy', 'note', 'scripture_reading'.
        *   `refId` (string, nullable): Reference to `songId` or `liturgicalTextId` if applicable.
        *   `titleOverride` (string, nullable): Custom title for display in setlist.
        *   `content` (string, nullable): For notes or scripture reading text.
        *   `keyOverride` (string, nullable): Specific key for a song in this setlist.
        *   `capoOverride` (number, nullable): Specific capo for a song in this setlist.
        *   `annotations` (string, nullable): Notes specific to this item in this setlist.
    *   `isTemplate` (boolean): True if this setlist is a template.
    *   `isArchived` (boolean): True if this setlist is archived.
    *   `createdBy` (object): { `uid` (string), `name` (string) }
    *   `createdAt` (timestamp): Firestore server timestamp.
    *   `updatedBy` (object, nullable): { `uid` (string), `name` (string) }
    *   `updatedAt` (timestamp, nullable): Firestore server timestamp.

**DR-003: `liturgical_texts` Collection (Firestore)**
*   **Purpose:** To store reusable liturgical texts, announcements, prayers, etc.
*   **Attributes:**
    *   `title` (string): Title of the text.
    *   `type` (string): e.g., 'prayer', 'reading', 'announcement', 'creed'.
    *   `content` (string): The full text content.
    *   `category` (string, nullable): Category for organization.
    *   `createdBy` (object): { `uid` (string), `name` (string) }
    *   `createdAt` (timestamp): Firestore server timestamp.
    *   `updatedBy` (object, nullable): { `uid` (string), `name` (string) }
    *   `updatedAt` (timestamp, nullable): Firestore server timestamp.

**DR-004: `user_annotations` Collection (Firestore) (Example for personal notes)**
*   **Purpose:** To store personal annotations made by users on songs or setlist items.
*   **Attributes:**
    *   `userId` (string): UID of the user who made the annotation.
    *   `targetType` (string): 'song' or 'setlistItem'.
    *   `targetId` (string): ID of the song or the specific `itemId` within a setlist.
    *   `notes` (string): The personal annotation content.
    *   `createdAt` (timestamp): Firestore server timestamp.
    *   `updatedAt` (timestamp, nullable): Firestore server timestamp.

### 3.4 Non-Functional Requirements (Examples)
*   **NFR-PERF-001:** On mobile, the song list should load and be interactive within 2 seconds on a typical 4G connection.
*   **NFR-USAB-001:** Font size adjustments (A-/A+) should provide a noticeable but not jarring change in text size with each click.
*   **NFR-USAB-002:** Theme selection shall be persisted across sessions for user convenience.
*   **NFR-ACC-001:** The application UI should adhere to WCAG 2.1 Level AA guidelines where applicable.
*   **NFR-SEC-001:** Access to administrative functions (song creation/editing) must be strictly limited to authorized admin UIDs.
*   **NFR-SEC-002:** User roles and permissions must be strictly enforced across all functionalities.
*   **NFR-PERF-002:** Transposition of chords should feel instantaneous to the user.
*   **NFR-PERF-003:** Presentation slide transitions should be smooth and not lag.
*   **NFR-DATA-001:** The system should ensure data integrity for song and setlist information.
*   **NFR-OFFLINE-001:** Offline data (songs, setlists) should be readily accessible and up-to-date as of the last sync.
*   **NFR-USAB-003 (Chord Editor):** The UI for inputting/editing chords (e.g., ChordPro) should be intuitive and provide immediate visual feedback or preview.
*   **NFR-USAB-004 (Setlist Editor):** Drag-and-drop reordering in the setlist editor should be smooth and responsive.
*   **NFR-USAB-005 (Presentation Controls):** Controls for advanced presentation features (backgrounds, stage display) should be clearly organized and easy to operate during a live event.

## 4. User Stories (Examples)
*   **US-001 (Mobile User):** As a mobile user, I want to quickly find a song using a search bar so that I can prepare for an event efficiently.
*   **US-002 (Desktop User - Presenter):** As a desktop user in presentation mode, I want to click on a paragraph of a song to display it in a separate, large-font window so that the congregation can easily read it.
*   **US-003 (App Admin):** As an app administrator, I want to add new songs with title, number, and content so that the song library is kept up-to-date.
*   **US-004 (App Admin):** As an app administrator, I want to edit existing songs to correct errors or update lyrics.
*   **US-005 (User):** As a user, I want to choose my preferred application theme (Light, Dark, Ocean Calm, or System Default) and have it remembered for my next visit.
*   **US-006 (App Admin):** As an app administrator, I want to log in with my Google account to access song management features.
*   **US-007 (Song Librarian):** As a song librarian, I want to add detailed metadata to songs, including chords, default key, BPM, author, and CCLI number, so that musicians and worship leaders have all necessary information.
*   **US-008 (Worship Leader):** As a worship leader, I want to create and organize setlists for services, including songs, scripture readings, and notes, so I can plan and lead worship effectively.
*   **US-009 (Musician - Mobile):** As a musician using a tablet, I want to view songs with clearly displayed chords and be able to transpose them to my instrument's key, and have the lyrics auto-scroll.
*   **US-010 (Media Operator):** As a media operator, I want to control the presentation with advanced options like custom backgrounds, smooth transitions, and a separate stage display for performers.
*   **US-011 (Song Librarian):** As a song librarian, I want to import songs from ChordPro files to quickly expand our digital library.
*   **US-012 (Worship Leader):** As a worship leader, I want to add liturgical texts like prayers or responsive readings into my setlist for a complete service flow.
*   **US-013 (Administrator):** As an administrator, I want to manage user roles and permissions to ensure appropriate access to application features.
*   **US-014 (Musician):** As a musician, I want to download the upcoming setlist for offline access in case of poor internet at the venue.

---
*End of Document*
