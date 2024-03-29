﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using viscon_backend;

#nullable disable

namespace visconbackend.Migrations
{
    [DbContext(typeof(Database))]
    [Migration("20221215121653_start_Paul")]
    partial class startPaul
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("viscon_backend.Models.Company", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("viscon_backend.Models.CompanyMachine", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("CompanyId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("MachineId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.HasIndex("MachineId");

                    b.ToTable("CompanyMachines");
                });

            modelBuilder.Entity("viscon_backend.Models.Machine", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Machines");
                });

            modelBuilder.Entity("viscon_backend.Models.Problem", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("MachineId")
                        .HasColumnType("uuid");

                    b.Property<List<string>>("Solutions")
                        .HasColumnType("text[]");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("MachineId");

                    b.ToTable("Problems");
                });

            modelBuilder.Entity("viscon_backend.Models.Ticket", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("AdminId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("CompanyMachineId")
                        .HasColumnType("uuid");

                    b.Property<string>("Problem")
                        .HasColumnType("text");

                    b.Property<DateTime>("Time")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("AdminId");

                    b.HasIndex("CompanyMachineId");

                    b.HasIndex("UserId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("viscon_backend.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("CompanyId")
                        .HasColumnType("uuid");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("viscon_backend.Models.CompanyMachine", b =>
                {
                    b.HasOne("viscon_backend.Models.Company", "Company")
                        .WithMany("CompanyMachines")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("viscon_backend.Models.Machine", "Machine")
                        .WithMany("CompanyMachines")
                        .HasForeignKey("MachineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");

                    b.Navigation("Machine");
                });

            modelBuilder.Entity("viscon_backend.Models.Problem", b =>
                {
                    b.HasOne("viscon_backend.Models.Machine", "Machine")
                        .WithMany("Problems")
                        .HasForeignKey("MachineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Machine");
                });

            modelBuilder.Entity("viscon_backend.Models.Ticket", b =>
                {
                    b.HasOne("viscon_backend.Models.User", "ClaimedBy")
                        .WithMany("ClaimedTickets")
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("viscon_backend.Models.CompanyMachine", "CompanyMachine")
                        .WithMany("Tickets")
                        .HasForeignKey("CompanyMachineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("viscon_backend.Models.User", "User")
                        .WithMany("Tickets")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ClaimedBy");

                    b.Navigation("CompanyMachine");

                    b.Navigation("User");
                });

            modelBuilder.Entity("viscon_backend.Models.User", b =>
                {
                    b.HasOne("viscon_backend.Models.Company", "Company")
                        .WithMany("Employees")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");
                });

            modelBuilder.Entity("viscon_backend.Models.Company", b =>
                {
                    b.Navigation("CompanyMachines");

                    b.Navigation("Employees");
                });

            modelBuilder.Entity("viscon_backend.Models.CompanyMachine", b =>
                {
                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("viscon_backend.Models.Machine", b =>
                {
                    b.Navigation("CompanyMachines");

                    b.Navigation("Problems");
                });

            modelBuilder.Entity("viscon_backend.Models.User", b =>
                {
                    b.Navigation("ClaimedTickets");

                    b.Navigation("Tickets");
                });
#pragma warning restore 612, 618
        }
    }
}
