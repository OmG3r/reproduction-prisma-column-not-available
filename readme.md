## Replication steps

1- install packages `npm i`
2- Populate `DATABASE_URL` in `.env` file with a planetscale DB URL
3- Run `npx prisma db push` to apply schema to the database (`id`, `name`, `lastname`)
4- Add a new Column to the `Person` model (example `age Int`)
5- run `npx prisma generate` (we do not want to add the new column to the database to generate the error)
6- remove the comment on line 9 in `index.ts` to add the `age` column to the payload
7- run the script `ts-node index.ts`
8- receive an error with `meta: { column: '(not available)' }`

you can apply the same steps with a non-planetscale database, you will recieve an error but it will specify that the column is `age`