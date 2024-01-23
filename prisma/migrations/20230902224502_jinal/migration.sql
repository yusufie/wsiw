-- CreateEnum
CREATE TYPE "ERROR_TYPES" AS ENUM ('CLIENT_ERROR', 'SERVER_ERROR', 'DATABASE_ERROR', 'AUTHENTICATION_ERROR', 'AUTHORIZATION_ERROR', 'VALIDATION_ERROR', 'NOT_FOUND_ERROR', 'BAD_REQUEST_ERROR', 'CONFLICT_ERROR', 'UNAUTHORIZED_ERROR', 'FORBIDDEN_ERROR', 'INTERNAL_SERVER_ERROR', 'NOT_IMPLEMENTED_ERROR', 'SERVICE_UNAVAILABLE_ERROR', 'GATEWAY_TIMEOUT_ERROR', 'BAD_GATEWAY_ERROR', 'NETWORK_CONNECT_TIMEOUT_ERROR', 'NETWORK_CONNECT_ERROR', 'NETWORK_RECEIVE_TIMEOUT_ERROR', 'NETWORK_RECEIVE_ERROR', 'NETWORK_SEND_TIMEOUT_ERROR', 'NETWORK_SEND_ERROR', 'NETWORK_ERROR', 'UNKNOWN_ERROR');

-- CreateTable
CREATE TABLE "AvailablePlatform" (
    "platform_name" TEXT NOT NULL,

    CONSTRAINT "AvailablePlatform_pkey" PRIMARY KEY ("platform_name")
);

-- CreateTable
CREATE TABLE "Actor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "biography" TEXT NOT NULL,
    "profile_picture_link" TEXT NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Director" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "biography" TEXT NOT NULL,
    "profile_picture_link" TEXT NOT NULL,

    CONSTRAINT "Director_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "IMDB" DOUBLE PRECISION NOT NULL,
    "release_year" INTEGER NOT NULL,
    "cover_image_link" TEXT NOT NULL,
    "trailer_link" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteList" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FavoriteList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromptHistory" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PromptHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchLogs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WatchLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedbackLogs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "FeedbackLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginLogs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoginLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityLogs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "feature_used" TEXT NOT NULL,
    "duration_seconds" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErrorLogs" (
    "id" TEXT NOT NULL,
    "log_type" "ERROR_TYPES" NOT NULL,
    "log_data" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ErrorLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerformanceLogs" (
    "id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PerformanceLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecommendationLogs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "recommended_movies" TEXT[],
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecommendationLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsageLogs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "feature_used" TEXT NOT NULL,
    "duration_seconds" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsageLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "user_id" TEXT NOT NULL,
    "favorite_color" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "birth_date_year" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "hobby" TEXT NOT NULL,
    "favorite_movie" TEXT NOT NULL,
    "hated_movie" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "cultural_background" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "relation_status" TEXT NOT NULL,
    "favorite_music_genre" TEXT NOT NULL,
    "favorite_book" TEXT NOT NULL,
    "favorite_game" TEXT NOT NULL,
    "preferred_platform" TEXT NOT NULL,
    "preferred_device" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "_MovieToPromptHistory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FavoriteListToMovie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AvailablePlatform_platform_name_key" ON "AvailablePlatform"("platform_name");

-- CreateIndex
CREATE INDEX "Actor_name" ON "Actor"("name");

-- CreateIndex
CREATE INDEX "Director_name" ON "Director"("name");

-- CreateIndex
CREATE INDEX "Movie_name" ON "Movie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Person_user_id_key" ON "Person"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToPromptHistory_AB_unique" ON "_MovieToPromptHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToPromptHistory_B_index" ON "_MovieToPromptHistory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteListToMovie_AB_unique" ON "_FavoriteListToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteListToMovie_B_index" ON "_FavoriteListToMovie"("B");

-- AddForeignKey
ALTER TABLE "FavoriteList" ADD CONSTRAINT "FavoriteList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromptHistory" ADD CONSTRAINT "PromptHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchLogs" ADD CONSTRAINT "WatchLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchLogs" ADD CONSTRAINT "WatchLogs_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedbackLogs" ADD CONSTRAINT "FeedbackLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedbackLogs" ADD CONSTRAINT "FeedbackLogs_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoginLogs" ADD CONSTRAINT "LoginLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityLogs" ADD CONSTRAINT "ActivityLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformanceLogs" ADD CONSTRAINT "PerformanceLogs_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformanceLogs" ADD CONSTRAINT "PerformanceLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationLogs" ADD CONSTRAINT "RecommendationLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsageLogs" ADD CONSTRAINT "UsageLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsageLogs" ADD CONSTRAINT "UsageLogs_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToPromptHistory" ADD CONSTRAINT "_MovieToPromptHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToPromptHistory" ADD CONSTRAINT "_MovieToPromptHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "PromptHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteListToMovie" ADD CONSTRAINT "_FavoriteListToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoriteList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteListToMovie" ADD CONSTRAINT "_FavoriteListToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
