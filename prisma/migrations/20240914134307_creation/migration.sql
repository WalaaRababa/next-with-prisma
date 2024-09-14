-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "discription" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "author_Id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_Id_fkey" FOREIGN KEY ("author_Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
