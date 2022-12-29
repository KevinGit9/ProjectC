using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace visconbackend.Migrations
{
    /// <inheritdoc />
    public partial class ChangedTickets2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Users_AdminId",
                table: "Tickets");

            migrationBuilder.AlterColumn<Guid>(
                name: "AdminId",
                table: "Tickets",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Users_AdminId",
                table: "Tickets",
                column: "AdminId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Users_AdminId",
                table: "Tickets");

            migrationBuilder.AlterColumn<Guid>(
                name: "AdminId",
                table: "Tickets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Users_AdminId",
                table: "Tickets",
                column: "AdminId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
