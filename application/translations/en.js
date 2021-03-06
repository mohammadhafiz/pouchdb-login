application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.translations('en', {
            'action_back': 'Go back',
            'action_cancel': 'Cancel',
            'action_change_password': 'Update',
            'action_create': 'Create',
            'action_create_client': 'Create new client',
            'action_create_council': 'Create new council',
            'action_create_grant': 'Create new grant',
            'action_create_scope': 'Create new scope',
            'action_create_user': 'Create new user',
            'action_delete': 'Delete',
            'action_filter': 'Filter',
            'action_hide': 'Hide',
            'action_login': 'Log in',
            'action_logout': 'Log out',
            'action_menu': 'Menu',
            'action_more': 'More',
            'action_register': 'Register',
            'action_reset': 'Reset',
            'action_search': 'Search',
            'action_select_person': 'Select Person',
            'action_submit': 'Submit',
            'action_update': 'Update',
            'action_update_client': 'Update client',
            'action_update_grant': 'Update grant',
            'action_update_scope': 'Update scope',

            'dialog_content_delete_record': 'Deleted record cannot be restored.',
            'dialog_title_delete_record': 'Would you like to delete this record?',

            'label_code': 'Code',
            'label_created_at': 'Created At',
            'label_current_password': 'Current Password',
            'label_description': 'Description',
            'label_grant': 'Grant',
            'label_id': 'Identity',
            'label_name': 'Name',
            'label_new_password': 'New Password',
            'label_retype_password': 'Re-Type Password',
            'label_password': 'Password',
            'label_password_confirmation': 'Password Confirmation',
            'label_retype_password': 'Re-Type Password',
            'label_scope': 'Scope',
            'label_secret': 'Secret',
            'label_updated_at': 'Updated At',
            'label_username': 'Username',

            'message_change_password': 'Your password has been changed',
            'message_empty_grant': 'Empty grant list',
            'message_empty_scope': 'Empty scope list',

            'placeholder': 'Placeholder',

            'title_access_control': 'Access Control',
            'title_administration': 'Administration',
            'title_all': 'All',
            'title_arrears': 'Arrears',
            'title_arrears_management': 'Arrears Management',
            'title_assigned': 'Assigned',
            'title_cases': 'Cases',
            'title_change_password': 'Change Password',
            'title_client_grants': 'Client Grants',
            'title_client_scopes': 'Client Scopes',
            'title_client_management': 'Client Management',
            'title_council': 'Council',
            'title_data_maintenance': 'Data Maintenance',
            'title_defaulter': 'Defaulter',
            'title_details': 'Details',
            'title_download': 'Download',
            'title_filter': 'Filter',
            'title_first_reminder': 'First Reminder',
            'title_grant_management': 'Grant Management',
            'title_grants': 'Grants',
            'title_history': 'History',
            'title_login': 'Log In',
            'title_menu': 'Menu',
            'title_modules': 'Module List',
            'title_notice': 'Notice',
            'title_owner': 'Owner',
            'title_property': 'Property',
            'title_record_count': 'Showing total of {{ length }} record',
            'title_register': 'Registration',
            'title_scope_management': 'Scope Management',
            'title_scopes': 'Scopes',
            'title_second_reminder': 'Second Reminder',
            'title_settings': 'Settings',
            'title_third_reminder': 'Third Reminder',
            'title_unassigned': 'Unassigned',
            'title_upload': 'Upload',
            'title_users': 'Users',
            'title_user_management': 'User Management',
            'title_workforce_management': 'Workforce Management',

            'toast_incorrect_credentials': 'The user credentials is incorrect.',
            'toast_invalid_refresh_token': 'The refresh token is invalid.',
            'toast_method_not_allowed': 'Request to the resource is not allowed.',
            'toast_validation_failed': 'Validation failed on server.',

            'validation_maxlength_24': 'This field may not be greater than 24 characters.',
            'validation_maxlength_255': 'This field may not be greater than 255 characters.',
            'validation_maxlength_40': 'This field may not be greater than 40 characters.',
            'validation_minlength_4': 'This field must be at least 4 characters.',
            'validation_required': 'This field is required.',
        });
    }]);
