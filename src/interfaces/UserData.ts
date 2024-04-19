export interface UserData {
    readonly uuid_user: string;
    name_user: string;
    lastname_user?: string;
    nickname_user?: string;
    email_user: string;
    phone_user: string;
    status_user: boolean;
    readonly created_at: Date | null;
}