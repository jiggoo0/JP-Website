| column_name | data_type                | is_nullable | column_default               |
| ----------- | ------------------------ | ----------- | ---------------------------- |
| id          | uuid                     | NO          | gen_random_uuid()            |
| created_at  | timestamp with time zone | NO          | timezone('utc'::text, now()) |
| name        | text                     | NO          | null                         |
| email       | text                     | YES         | null                         |
| phone       | text                     | YES         | null                         |
| message     | text                     | YES         | null                         |
| template_id | text                     | YES         | null                         |
| category    | text                     | YES         | null                         |
| source_url  | text                     | YES         | null                         |
| status      | text                     | YES         | 'new'::text                  |
| admin_notes | text                     | YES         | null                         |
| metadata    | jsonb                    | YES         | '{}'::jsonb                  |
| updated_at  | timestamp with time zone | YES         | timezone('utc'::text, now()) |
