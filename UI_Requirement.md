# UI/UX Requirements Specification: Songs4Ehow

## 1. Introduction

### 1.1 Purpose
This document specifies the User Interface (UI) and User Experience (UX) requirements for the Songs4Ehow application, complementing the main Software Requirements Specification (SRS). It details the visual and interactive aspects of the application.

### 1.2 Scope
This document covers UI/UX requirements for both mobile and desktop platforms of the Songs4Ehow application, including layout, visual elements, and interaction patterns.

## 2. General UI/UX

### 2.1 Definitions, Acronyms, and Abbreviations
*   **UI:** User Interface
*   **UX:** User Experience
*   **CCLI:** Christian Copyright Licensing International
*   **BPM:** Beats Per Minute
*   **ChordPro:** A text-based format for specifying chords along with lyrics.

## 3. Specific UI Requirements

### 3.1 Initial Application Launch

*   **FR-GEN-001.1 (UI - Desktop):** The "Songs List" view shall be displayed in a left pane.
*   **FR-GEN-001.2 (UI - Desktop):** An initial message (e.g., "Select a song from the list...") shall be displayed in the main pane.
*   **FR-GEN-002 (UI - Mobile):** On mobile devices, upon launch, the application shall display the "Songs List" view.

### 3.2 Mobile Application Flow

*   **FR-MOB-001.1 (UI):** The "Songs List" view shall display the heading "Melodies of worship".
*   **FR-MOB-001.2 (UI):** The "Songs List" view shall include a search bar for filtering songs.
*   **FR-MOB-001.2.1 (UI):** The song list view may include options to filter by tags/themes.
*   **FR-MOB-001.3 (UI):** The "Songs List" view shall provide access to Theme settings (presumably at the bottom).
*   **FR-MOB-001.4 (UI):** Scroll-to-top and scroll-to-bottom buttons shall be available for the song list when applicable.
*   **FR-MOB-002.2 (UI):** A "back to list" button shall be available when viewing a song.
*   **FR-MOB-002.3 (UI):** "A-" and "A+" buttons for font size adjustment shall be available, positioned at the top right corner when viewing a song.
*   **FR-MOB-002.5 (UI - Musician Tools):** When viewing a song, controls for chord transposition (e.g., dropdown or +/- buttons for semitones), auto-scroll (play/pause, speed), and adding personal annotations shall be available. Chords shall be displayed inline or above lyrics, clearly distinguishable.

### 3.3 Desktop Application Flow

*   **FR-DES-001.1 (UI):** The "Songs List" view (left pane) shall display the heading "Melodies of worship".
*   **FR-DES-001.2 (UI):** The "Songs List" view (left pane) shall include a search bar.
*   **FR-DES-001.3 (UI):** The "Songs List" view (left pane) shall provide access to Theme settings (presumably at the bottom).
*   **FR-DES-001.4 (UI):** An "Add New Song" (or "Create Item") button shall be available, visibility based on user role.
*   **FR-DES-001.4.1 (UI):** The left pane may also feature sections or tabs for "Songs", "Setlists", "Liturgical Texts", and "Admin/Settings" based on user role.
*   **FR-DES-001.5 (UI - Main Pane):** "A-" and "A+" buttons for font size adjustment shall be available on the top left corner of the main pane.
*   **FR-DES-001.6 (UI - Main Pane):** A "PRESENT" switch button (for presentation mode) shall be available on the top right corner of the main pane.
*   **FR-DES-001.7 (UI):** The sidebar (left pane) shall be resizable by dragging its edge.
*   **FR-DES-001.8 (UI):** Scroll-to-top and scroll-to-bottom buttons shall be available for the song list when applicable.
*   **FR-DES-001.9 (UI - Song Display):** When a song is selected, the main pane shall display its title, content (lyrics and chords formatted), and relevant metadata (key, BPM, author, CCLI, tags, scripture references).
*   **FR-DES-002.3 (UI - Main Pane):** "A-" and "A+" buttons for font size adjustment shall remain available on the top left corner of the main pane when a song is displayed. These buttons affect the main pane font size when presentation mode is off.
*   **FR-DES-002.4 (UI - Main Pane):** An "Edit Song" (or "Edit Item") button shall be available when a song or other editable item is displayed, visibility based on user role.
*   **FR-DES-002.5 (UI - Main Pane):** The "PRESENT" switch button shall remain available on the top right corner of the main pane when a song is displayed.
*   **FR-DES-002.6 (UI - Main Pane):** Paragraphs of the song lyrics shall be styled to indicate clickability if presentation mode is ON.
*   **FR-DES-003.2 (UI):** In presentation mode, a font selection dropdown shall be available, offering predefined fonts (e.g., Default, Roboto, Noto Sans Telugu, Oswald, Lobster).
*   **FR-DES-003.2.1 (UI - Presentation Controls):** Additional controls in presentation mode shall include:
    *   Background selection (color, image, video loop).
    *   Advanced theme/layout options for the presentation window.
    *   Transition effect selection.
    *   Button to "Blank to Background" / "Clear Layer".
    *   Controls for managing Stage Display output (if active).
    *   Interface to send an alert/message overlay (for authorized roles).
*   **FR-DES-003.5 (UI - Presentation Window):** The new window (for presentation mode) shall display only the clicked paragraph, centered, with a black background and white text, using the selected font and font size.
*   **FR-DES-003.6 (UI - Stage Display Window - Optional):** A separate, configurable window for stage display, showing current/next lines, chords, clock, etc.

### 3.4 Settings

*   **FR-SET-001.1 (UI):** The application shall provide a theme toggle button.

### 3.5 Search Functionality

*   **FR-SRCH-001.3 (UI):** A "clear search" button shall appear when text is entered into the search bar.

### 3.6 Authentication

*   **FR-AUTH-001.1 (UI):** A "Login with Google" button shall be visible to unauthenticated users.
*   **FR-AUTH-002.1 (UI):** The "Login with Google" button shall be hidden upon successful authentication.
*   **FR-AUTH-002.2 (UI):** A "Logout" button shall become visible upon successful authentication.
*   **FR-AUTH-002.3 (UI):** User information (e.g., display name or email) shall be displayed upon successful authentication.
*   **FR-AUTH-002.4 (UI):** If the user is an admin, an "(Admin)" indicator shall be displayed next to their information.

### 3.7 Song Management (Admin Only)

*   **FR-ADMIN-001.1 (UI):** An "Add New Song" (or "Create Song") button shall be visible to users with appropriate permissions (e.g., Admin, Song Librarian).
*   **FR-ADMIN-001.3 (UI):** The song editor form shall include fields for:
    *   Song Title (required)
    *   Song Number (for ordering, optional)
    *   Song Content (lyrics, required)
    *   Chords (e.g., using a ChordPro editor or textarea)
    *   Default Key
    *   Capo
    *   BPM
    *   Author(s)/Composer(s)
    *   Copyright Info & CCLI Number
    *   Themes/Tags (e.g., a multi-select or tag input field)
    *   Scripture References
    *   Alternative Titles
    *   (UI for defining song sections like Verse, Chorus might be integrated into the content editor or as separate metadata)
*   **FR-ADMIN-001.4 (UI):** The "Add New Song" form shall have "Save Song" and "Cancel" buttons.
*   **FR-ADMIN-002.1 (UI):** An "Edit Song" button shall be visible to users with appropriate permissions when a song is selected.
*   **FR-ADMIN-002.3 (UI):** The "Edit Song" form shall have "Update Song" and "Cancel" buttons.
*   **FR-SONG-EDIT-001 (UI - Version History):** If song version history is implemented, the song editor or a dedicated view shall provide access to view past versions, compare, and potentially revert.

### 3.8 Setlist Management (UI) (Worship Leader, Admin roles)
*   **UI-SETLIST-001:** A dedicated view/section for managing setlists (list, create, edit, archive).
*   **UI-SETLIST-002 (Editor):** The setlist editor shall allow:
    *   Naming the setlist and setting a date/event.
    *   Adding songs (e.g., from a searchable song list panel).
    *   Adding other items (notes, scripture references, liturgical text references).
    *   Drag-and-drop reordering of items.
    *   Editing annotations, key overrides, capo overrides per item.
    *   Options to "Save as Template" and "Load from Template".
*   **UI-SETLIST-003 (Display):** Clear display of setlist items, including any specific annotations or overrides.

### 3.9 Liturgy & Other Texts Management (UI) (Admin, Song Librarian, Worship Leader roles)
*   **UI-LITURGY-001:** A dedicated view/section for managing liturgical texts (list, create, edit).
*   **UI-LITURGY-002 (Editor):** A form for liturgical texts including fields for Title, Type (prayer, reading, etc.), Content, and Category.

### 3.10 Data Portability & Management (UI) (Admin, Song Librarian roles)
*   **UI-DATA-001 (Import):** An interface for importing songs, allowing file selection (ChordPro, text) and mapping options if necessary.
*   **UI-DATA-002 (Export):** Options to export selected songs or setlists in various formats (PDF, text, ChordPro).
*   **UI-DATA-003 (Bulk Edit):** A UI to select multiple songs and apply changes to common metadata fields.
*   **UI-DATA-004 (Duplicates):** A tool or view to highlight potential duplicate songs with options to merge or delete.

### 3.11 User Role Management (UI) (Admin role)
*   **UI-ROLE-001:** An admin panel section for viewing users and assigning/modifying their roles (e.g., Administrator, Song Librarian, Worship Leader, Musician, Media Operator).

### 3.12 Offline Access (UI)
*   **UI-OFFLINE-001:** Buttons or indicators for downloading songs/setlists for offline use.
*   **UI-OFFLINE-002:** Clear indication when the app is in offline mode and which content is available.

## 4. Application States (UI Summary)

This section summarizes the key UI aspects of application states.

### 4.1 Mobile States
*   **mobile_list_view (UI):** Songs list is displayed with "Melodies of worship" heading, search, theme toggle, and auth controls.
*   **mobile_song (UI):** Song lyrics and chords are displayed with "back to list", A-/A+ buttons, transposition, auto-scroll, and personal annotation controls.
*   **mobile_song_editor (UI):** (Role-dependent) Form for adding/editing song details with all new fields.
*   **mobile_setlist_list_view (UI):** Displays a list of available setlists.
*   **mobile_setlist_detail_view (UI):** Displays items within a selected setlist; allows viewing annotations, potentially adding personal notes.
*   **mobile_offline_view (UI):** Shows downloaded content available for offline use.

### 4.2 Desktop States
*   **desktop_initial_view (UI):**
    *   Left Pane (`desktop_list_view`): Songs list with "Melodies of worship" heading, search, theme toggle, auth controls, "Add New Song" button (admin).
    *   Main Pane (`desktop_initial_main_pane`): Initial message. A-/A+ buttons and PRESENT switch are available.
*   **desktop_song_list_view (UI - Left Pane):** Enhanced with filtering by tags, navigation to other item types (setlists, liturgy).
*   **desktop_song (UI):**
    *   Left Pane: Songs list.
    *   Main Pane: Song lyrics, chords, and full metadata displayed. A-/A+ buttons, PRESENT switch, and Edit Song button (role-dependent) are available.
*   **desktop_presentation (UI):**
    *   Left Pane: Songs list.
    *   Main Pane: Song lyrics/liturgy displayed with clickable paragraphs/sections. Enhanced presentation controls (backgrounds, themes, transitions, alerts, stage display controls).
    *   Secondary Window (Projector): Displays the clicked paragraph/slide with full theming.
    *   Tertiary Window (Stage Display - Optional): Displays configurable content for performers.
*   **desktop_song_editor (UI):** (Role-dependent)
    *   Left Pane: Songs list.
    *   Main Pane: Comprehensive form for adding/editing song details including all new metadata fields (chords, key, BPM, CCLI, tags, etc.) and version history access.
*   **desktop_setlist_manager (UI):**
    *   Left Pane: Navigation (Songs, Setlists, etc.).
    *   Main Pane: View for listing, creating, and editing setlists. Setlist editor includes item reordering, adding various item types, annotations, key/capo overrides, template functions.
*   **desktop_liturgy_manager (UI):**
    *   Left Pane: Navigation.
    *   Main Pane: View for listing, creating, and editing liturgical texts.
*   **desktop_admin_panel (UI):**
    *   Left Pane: Navigation.
    *   Main Pane: Sections for user role management, data import/export tools, duplicate management, system settings.

## 5. Non-Functional UI Requirements (Examples)

*   **NFR-USAB-001:** Font size adjustments (A-/A+) should provide a noticeable but not jarring change in text size with each click.
*   **NFR-ACC-001:** The application UI should adhere to WCAG 2.1 Level AA guidelines for accessibility where applicable.
*   **NFR-USAB-003 (Chord Editor):** The UI for inputting/editing chords (e.g., ChordPro) should be intuitive and provide immediate visual feedback or preview.
*   **NFR-USAB-004 (Setlist Editor):** Drag-and-drop reordering in the setlist editor should be smooth and responsive.
*   **NFR-USAB-005 (Presentation Controls):** Controls for advanced presentation features (backgrounds, stage display) should be clearly organized and easy to operate during a live event.

---
*End of Document*