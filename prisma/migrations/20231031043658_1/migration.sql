-- CreateTable
CREATE TABLE "food_recipes" (
    "recipes_id" SERIAL NOT NULL,
    "name_recipes" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "ingredients" TEXT NOT NULL,
    "video" VARCHAR,
    "users_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "food_recipe_pkey" PRIMARY KEY ("recipes_id")
);

-- CreateTable
CREATE TABLE "users" (
    "users_id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(20),
    "password" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "role" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("users_id")
);

-- AddForeignKey
ALTER TABLE "food_recipes" ADD CONSTRAINT "food_recipe_user_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("users_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
