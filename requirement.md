# Software Requirements Specification: Songs4Ehow

## 1. Introduction

### 1.1 Purpose
This document specifies the software requirements for the Songs4Ehow application. It describes the functional and non-functional requirements of the application, covering both mobile and desktop platforms.

### 1.2 Scope
The Songs4Ehow application will allow users to view song lyrics, manage song lists, and display lyrics in a presentation mode (on desktop). It will provide distinct user experiences tailored for mobile and desktop environments.
The scope is expanded to include comprehensive song metadata management (including chords and musical details), setlist/service planning, advanced presentation options, granular user roles, musician-focused tools, data import/export, and management of liturgical texts.

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

**FR-GEN-001 (Desktop):** On desktop devices, upon launch, the application shall display the "Songs List" view in a left pane and an initial message in the main pane.
*   **FR-GEN-001.1:** The "Songs List" view is displayed in a left pane (ref: `desktop_list_view` state - left pane). (See UI_Requirement.md for details)
*   **FR-GEN-001.2:** An initial message is displayed in the main pane (ref: `desktop_initial_main_pane` state). (See UI_Requirement.md for details)

**FR-GEN-002 (Mobile):** On mobile devices, upon launch, the application shall display the "Songs List" view (ref: `mobile_list_view` state). (See UI_Requirement.md for details)
    *(Note: The previously mentioned animated logo on interaction (old FR-GEN-001.1, FR-GEN-002) is not currently implemented in index.html and is deferred/removed from active requirements.)*

#### 3.1.2 Mobile Application Flow

**FR-MOB-001:** If the application is running on a mobile device, after the initial interaction (FR-GEN-002), the application shall transition to the "Songs List" view (ref: `mobile_list` state).
*   **FR-MOB-001.1 (UI):** The "Songs List" view shall display the heading "Melodies of worship".
*   **FR-MOB-001.2 (UI):** The "Songs List" view shall include a search bar for filtering songs.
*   **FR-MOB-001.3:** The "Songs List" view shall provide access to Theme settings. (UI details in UI_Requirement.md)
*   **FR-MOB-001.4:** Scroll-to-top and scroll-to-bottom buttons shall be available for the song list when applicable. (UI details in UI_Requirement.md)

**FR-MOB-002:** When a user clicks on a song in the "Songs List" view on a mobile device:
*   **FR-MOB-002.1:** The application shall display the song lyrics as normal text (ref: `mobile_song` state).
*   **FR-MOB-002.2:** A "back to list" button shall be available. (UI details in UI_Requirement.md)
*   **FR-MOB-002.3:** "A-" and "A+" buttons for font size adjustment shall be available. (UI details in UI_Requirement.md)
*   **FR-MOB-002.4:** The presentation mode option shall be unavailable.
*   **FR-MOB-002.5:** Clickable paragraphs functionality shall be disabled.
*   **FR-MOB-002.6:** The option to edit the song shall be unavailable.

#### 3.1.3 Desktop Application Flow

**FR-DES-001:** If the application is running on a desktop device, the "Songs List" view shall be displayed in a left pane (ref: `desktop_list_view` state - left pane). (UI details in UI_Requirement.md)
*   **FR-DES-001.1:** The "Songs List" view (left pane) shall display the heading "Melodies of worship". (UI details in UI_Requirement.md)
*   **FR-DES-001.2:** The "Songs List" view (left pane) shall include a search bar. (UI details in UI_Requirement.md)
*   **FR-DES-001.3:** The "Songs List" view (left pane) shall provide access to Theme settings. (UI details in UI_Requirement.md)
*   **FR-DES-001.4:** An "Add New Song" button shall be available in conjunction with the songs list, visible only to authenticated admin users (see FR-AUTH-004, FR-ADMIN-001). (UI details in UI_Requirement.md)
*   **FR-DES-001.5:** "A-" and "A+" buttons for font size adjustment shall be available on the main pane. (UI details in UI_Requirement.md)
*   **FR-DES-001.6:** A "PRESENT" switch button (for presentation mode) shall be available on the main pane. (UI details in UI_Requirement.md)
*   **FR-DES-001.7:** The sidebar (left pane) shall be resizable. (UI details in UI_Requirement.md)
*   **FR-DES-001.8:** Scroll-to-top and scroll-to-bottom buttons shall be available for the song list when applicable. (UI details in UI_Requirement.md)

**FR-DES-002:** When a user clicks on a song in the "Songs List" view on a desktop device (ref: `desktop_song` state):
*   **FR-DES-002.1:** The song lyrics shall be displayed as normal text in the main pane.
*   **FR-DES-002.2:** A "back" button to navigate away from the song lyrics view (within the main pane) shall not be available (navigation is managed via the list).
*   **FR-DES-002.3:** "A-" and "A+" buttons for font size adjustment shall remain available on the main pane. These buttons affect the main pane font size when presentation mode is off. (UI details in UI_Requirement.md)
*   **FR-DES-002.4:** An "Edit Song" button shall be available. (UI details in UI_Requirement.md)
*   **FR-DES-002.5:** The "PRESENT" switch button shall remain available on the main pane. (UI details in UI_Requirement.md)
*   **FR-DES-002.6:** Paragraphs of the song lyrics shall be styled to indicate clickability if presentation mode is ON. (UI details in UI_Requirement.md)

**FR-DES-003:** Presentation Mode (Desktop) - When the "PRESENT" switch is activated (ON) (ref: `desktop_presentation` state):
*   **FR-DES-003.1:** The "A-" and "A+" buttons shall adjust the font size in the presentation window.
*   **FR-DES-003.2:** A font selection dropdown shall be available, offering predefined fonts. (UI details in UI_Requirement.md)
*   **FR-DES-003.3:** Paragraphs within the song lyrics (displayed in the main pane) shall become clickable.
*   **FR-DES-003.4:** Clicking a paragraph shall open/update a new, separate window.
*   **FR-DES-003.5:** The new window shall display only the clicked paragraph, using the selected font and font size (from FR-DES-003.1, FR-DES-003.2). (UI details in UI_Requirement.md)

**FR-DES-004:** Presentation Mode (Desktop) - When the "PRESENT" switch is deactivated (OFF):
*   **FR-DES-004.1:** Clickable paragraphs functionality shall be disabled in the main pane.
*   **FR-DES-004.2:** The "A-" and "A+" buttons shall adjust the font size in the main pane.
*   **FR-DES-004.3:** The separate presentation window (FR-DES-003.4) should close or become inactive.

#### 3.1.4 Settings
**FR-SET-001: Theme Configuration**
*   **FR-SET-001.1:** The application shall provide a theme toggle button. (UI details in UI_Requirement.md)
*   **FR-SET-001.2:** Clicking the theme toggle button shall cycle through available themes: System Default, Light, Dark, Ocean Calm.
*   **FR-SET-001.3:** The selected theme shall be applied immediately.
*   **FR-SET-001.4:** The selected theme preference shall be persisted in the user's browser (e.g., using localStorage).
*   **FR-SET-001.5:** On application load, the persisted theme shall be applied. If no theme is persisted, "System Default" shall be used.

**(FR-SET-001.2 and FR-SET-002.2 regarding feedback options are deferred/removed as not currently implemented in index.html.)**

#### 3.1.5 Search Functionality
**FR-SRCH-001:** The song search input shall filter the displayed song list.
*   **FR-SRCH-001.1:** Filtering shall occur as the user types.
*   **FR-SRCH-001.2:** Search shall be case-insensitive and match against song titles and song content.
*   **SRCH-001.3:** A "clear search" button shall appear when text is entered into the search bar. (UI details in UI_Requirement.md)
*   **FR-SRCH-001.4:** Clicking the "clear search" button shall clear the search input and display the full song list.

#### 3.1.6 Authentication
**FR-AUTH-001:** The application shall allow users to authenticate using Google Sign-In.
*   **FR-AUTH-001.1:** A "Login with Google" button shall be visible to unauthenticated users. (UI details in UI_Requirement.md)

**FR-AUTH-002:** Upon successful authentication:
*   **FR-AUTH-002.1:** The "Login with Google" button shall be hidden. (UI details in UI_Requirement.md)
*   **FR-AUTH-002.2:** A "Logout" button shall become visible. (UI details in UI_Requirement.md)

**FR-AUTH-002.3:** User information (e.g., display name or email) shall be displayed. (UI details in UI_Requirement.md)
*   **FR-AUTH-002.4:** If the user is an admin (see C-001), an "(Admin)" indicator shall be displayed next to their information. (UI details in UI_Requirement.md)
*   **FR-AUTH-003:** The application shall allow authenticated users to log out.
*   **FR-AUTH-003.1:** Clicking the "Logout" button shall sign the user out.
*   **FR-AUTH-003.2:** Upon logout, the UI shall revert to the unauthenticated state (FR-AUTH-001.1, hide FR-AUTH-002.2, FR-AUTH-002.3, FR-AUTH-002.4).
*   **FR-AUTH-004:** The application shall identify admin users based on a predefined list of Firebase UIDs (see C-001).

#### 3.1.7 Song Management (Primarily Admin/Song Librarian roles) (UI details in UI_Requirement.md)
*(These functionalities are only available to authenticated admin users, see FR-AUTH-004)*

**FR-ADMIN-001: Add New Song**
*   **FR-ADMIN-001.1 (UI):** An "Add New Song" button shall be visible to admin users.
*   **FR-ADMIN-001.2:** Clicking "Add New Song" shall display a song editor form.
*   **FR-ADMIN-001.3 (UI):** The song editor form shall include fields for: Song Title, Song Number (for ordering), Song Content.
*   **FR-ADMIN-001.4 (UI):** The form shall have "Save Song" and "Cancel" buttons.
*   **FR-ADMIN-001.5:** Clicking "Save Song" (or "Create Song") shall:
    *   Validate that Title and Content are not empty, and Number is a valid number.
    *   Create a new song document in Firestore with the provided data, `createdAt` timestamp, and `createdBy` user info (UID and name). (See DR-001.1)
    *   Hide the editor form.
    *   Refresh the song list.
    *   Display a success message.
*   **FR-ADMIN-001.6:** Clicking "Cancel" shall hide the editor form without saving.

**FR-ADMIN-002: Edit Song**
*   **FR-ADMIN-002.1 (UI):** An "Edit Song" button shall be visible to admin users when a song is selected and displayed in the main pane.
*   **FR-ADMIN-002.2:** Clicking "Edit Song" shall display the song editor form, pre-filled with the selected song's data (title, number, content).
*   **FR-ADMIN-002.3 (UI):** The form shall have "Update Song" and "Cancel" buttons.
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
*   **FR-SONG-002.1:** When viewing a song, relevant stored metadata (key, BPM, chords, author, etc.) shall be displayable. (UI details in UI_Requirement.md)
*   **FR-SONG-002.2:** Chords shall be displayed appropriately formatted with lyrics. (UI details in UI_Requirement.md)

#### 3.1.8 Setlist (Order of Service) Management (Accessible based on user role, e.g., Worship Leader, Admin)

**FR-SETLIST-001: Setlist Creation and Management**
*   **FR-SETLIST-001.1:** Users with appropriate permissions shall be able to create new setlists, providing a name and date/event association. (See DR-002)
*   **FR-SETLIST-001.2:** Users shall be able to add songs from the song library to a setlist.
*   **FR-SETLIST-001.3:** Users shall be able to reorder songs and other items within a setlist (e.g., via drag-and-drop).
*   **FR-SETLIST-001.4:** Users shall be able to add non-song items to a setlist, such as notes, scripture readings, or references to liturgical texts. (See DR-002, DR-003)
*   **FR-SETLIST-001.5:** Users shall be able to add annotations or notes specific to a song's performance within a particular setlist (e.g., specific key, arrangement notes). (See DR-002)
*   **FR-SETLIST-001.6:** The system shall allow saving a setlist as a template for future use.
*   **FR-SETLIST-001.7:** Users shall be able to load setlists from saved templates.
*   **FR-SETLIST-001.8:** Users shall be able to archive and unarchive setlists.
*   **FR-SETLIST-001.9:** Users shall be able to view and manage archived setlists.
*   **FR-SETLIST-001.10 (Future):** The system may support sharing setlists with other users and collaborative editing based on permissions.

**FR-SETLIST-002: Setlist Display and Interaction**
*   **FR-SETLIST-002.1:** The application shall provide a view to display the contents of a selected setlist. (UI details in UI_Requirement.md)
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
*   **FR-ROLE-001.3:** User role assignment shall be managed by Administrators.

**FR-COLLAB-001: Song Version History**
*   **FR-COLLAB-001.1:** The system shall track version history for changes made to songs. (See DR-001.1 `version_history_ref`)
*   **FR-COLLAB-001.2:** Users with appropriate permissions shall be able to view the history of changes for a song, compare versions, and potentially revert to a previous version.

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
*   **FR-MUSIC-002.1:** Users shall be able to download selected songs and setlists for offline access on their mobile/tablet devices.
*   **FR-MUSIC-002.2:** The application shall function in a read-only mode for offline content when no internet connection is available.

#### 3.1.12 Data Portability & Management (Admin, Song Librarian roles)

**FR-DATA-001: Song Import**
*   **FR-DATA-001.1:** The system shall allow importing songs from common formats such as ChordPro, plain text, and potentially CCLI SongSelect data (if feasible via file or API).

**FR-DATA-002: Song and Setlist Export**
*   **FR-DATA-002.1:** The system shall allow exporting individual songs or entire setlists in formats like PDF, text, or ChordPro.

**FR-DATA-003: Data Management Tools**
*   **FR-DATA-003.1:** The system shall provide tools for bulk editing of song metadata (e.g., tags, author) for multiple selected songs.
*   **FR-DATA-003.2:** The system shall include functionality to help identify and manage potential duplicate songs in the library.
*   **FR-DATA-003.3 (Operational):** Administrators should have a strategy for backing up and restoring the Firestore database (may not be an in-app user feature).

#### 3.1.13 Liturgy & Other Texts Management (Admin, Song Librarian, Worship Leader roles)

**FR-LITURGY-001: Management of Liturgical Texts**
*   **FR-LITURGY-001.1:** The system shall allow users to create, edit, and manage other textual items such as responsive readings, prayers, creeds, and announcements. (See DR-003)
*   **FR-LITURGY-001.2:** These liturgical texts shall be organizable and searchable similar to songs.

**FR-LITURGY-002: Presentation of Liturgical Texts**
*   **FR-LITURGY-002.1:** Liturgical texts shall be presentable using the same or similar presentation tools as songs, including inclusion in setlists.

### 3.2 Application States (Summary)
This section summarizes the key application states derived from the requirements.
(Refer to UI_Requirement.md for detailed UI descriptions of these states)

#### 3.2.1 Mobile States
*   **mobile_list_view:** Songs list is displayed with "Melodies of worship" heading, search, theme toggle, and auth controls. (Corresponds to FR-GEN-002, FR-MOB-001)
*   **mobile_song:** Song lyrics are displayed with a "back to list" button (top-left) and A-/A+ buttons (top-right). (Corresponds to FR-MOB-002). Enhanced with chord display, transposition, auto-scroll options (FR-MUSIC-001).
*   **mobile_song_editor:** (Admin only) Form for adding/editing song details. (Corresponds to FR-ADMIN-001, FR-ADMIN-002).
*   **mobile_setlist_view:** Displays a list of available setlists.
*   **mobile_setlist_detail_view:** Displays items within a selected setlist, with options for personal annotations.

#### 3.2.2 Desktop States
*   **desktop_initial_view:**
    *   Left Pane (`desktop_list_view`): Displays song list and controls. (Corresponds to FR-GEN-001.1, FR-DES-001)
    *   Main Pane (`desktop_initial_main_pane`): Displays initial message and controls. (Corresponds to FR-GEN-001.2, FR-DES-001.5, FR-DES-001.6)
*   **desktop_song_list_view:** (Left Pane) Enhanced with filtering by tags, etc.
*   **desktop_song:**
    *   Left Pane: Songs list (as in `desktop_first`).
    *   Main Pane: Song lyrics displayed with controls, including enhanced metadata and chord display. (Corresponds to FR-DES-002, FR-SONG-002)
*   **desktop_presentation:**
    *   Left Pane: Songs list (as in `desktop_first`).
    *   Main Pane: Song lyrics displayed with presentation controls. (Corresponds to FR-DES-003). Enhanced with advanced presentation controls (FR-PRES-ADV-001).
    *   Secondary Window (Main Projector): Displays the clicked paragraph/slide with selected theme, background, font.
    *   Tertiary Window (Stage Display - Optional): Displays configurable content for stage. (FR-PRES-ADV-002)
*   **desktop_song_editor:** (Admin only)
    *   Left Pane: Songs list.
    *   Main Pane: Form for adding/editing song details, including new fields for chords, key, BPM, CCLI, etc. (Corresponds to FR-ADMIN-001, FR-ADMIN-002, FR-SONG-001)
*   **desktop_setlist_management_view:** Interface for creating, viewing, and editing setlists. (FR-SETLIST-001)
*   **desktop_liturgy_editor_view:** Interface for managing liturgical texts. (FR-LITURGY-001)
*   **desktop_admin_panel_view:** For user role management, system settings, data import/export. (FR-ROLE-001, FR-DATA-001, FR-DATA-002)

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

### 3.4 Non-Functional Requirements (Examples - To Be Expanded)

*   **NFR-PERF-001:** On mobile, the song list should load and be interactive within 2 seconds on a typical 4G connection.
*   **NFR-USAB-001:** Font size adjustments should provide a noticeable change. (See UI_Requirement.md for details)
*   **NFR-USAB-002:** Theme selection shall be persisted across sessions for user convenience.
*   **NFR-ACC-001:** The application UI should adhere to WCAG 2.1 Level AA guidelines where applicable. (See UI_Requirement.md for details)
*   **NFR-SEC-001:** Access to administrative functions (song creation/editing) must be strictly limited to authorized admin UIDs.
*   **NFR-SEC-002:** User roles and permissions must be strictly enforced across all functionalities.
*   **NFR-PERF-002:** Transposition of chords should feel instantaneous to the user.
*   **NFR-PERF-003:** Presentation slide transitions should be smooth and not lag.
*   **NFR-DATA-001:** The system should ensure data integrity for song and setlist information.
*   **NFR-OFFLINE-001:** Offline data (songs, setlists) should be readily accessible and up-to-date as of the last sync.

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
