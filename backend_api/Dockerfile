# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["backend_api.csproj", "./"]
RUN dotnet restore "backend_api.csproj"

COPY . .
RUN dotnet publish "backend_api.csproj" -c Release -o /app/publish

# Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
EXPOSE 8080

COPY --from=build /app/publish .


ENTRYPOINT ["dotnet", "backend_api.dll"]