create table
  public."Options" (
    id uuid not null default gen_random_uuid (),
    text text not null,
    votes smallint null,
    "Link_to_vote" text null,
    questions_id uuid null,
    constraint Options_pkey primary key (id),
    constraint Options_questions_id_fkey foreign key (questions_id) references "Questions" (id)
  ) tablespace pg_default;

  create table
  public."Questions" (
    id uuid not null default gen_random_uuid (),
    title text not null,
    constraint Questions_pkey primary key (id),
    constraint Questions_id_key unique (id),
    constraint Questions_title_key unique (title)
  ) tablespace pg_default;